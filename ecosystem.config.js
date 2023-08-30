module.exports = {
    apps: [{
        name: "svadba",
        script: "./src/index.js"
    }],
    deploy: {
        production: {
            ssh_options: 'StrictHostKeyChecking=no',
            'post-deploy': 'npm i && npm run build',
        },
    },
};
