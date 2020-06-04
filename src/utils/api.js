export function fetchPopularRepos(language) {
    const endpoint_repos = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    return fetch(endpoint_repos)
        .then((response) => response.json())
        .then((data) => {
            if (!data.items) {
                throw new Error(data.message);
            }
            return data.items;
        });
}
function getErrorMessage(message, username) {
    if (message === "Not Found") {
        return `${username} doesn't exist`;
    }
    return message;
}

function getProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((profile) => {
            if (profile.message) {
                throw new Error(getErrorMessage(profile.message, username));
            }
            return profile;
        });
}
function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then((res) => res.json())
        .then((repos) => {
            if (repos.message) {
                throw new Error(getErrorMessage(repos.message, username));
            }
            return repos;
        });
}
function calculateScore(followers, repos) {
    return followers * 3 + getStarCount(repos);
}

function getStarCount(repos) {
    return repos.reduce((acc, { stargazers_count }) => {
        return acc + stargazers_count;
    }, 0);
}

function getUserData(player) {
    return Promise.all([getProfile(player), getRepos(player)]).then(
        ([profile, repos]) => ({
            profile,
            score: calculateScore(profile.followers, repos),
        })
    );
}
function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
}
export function Battle(players) {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1]),
    ]).then((results) => sortPlayers(results));
}
