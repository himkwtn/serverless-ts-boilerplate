if [ -e .env ]; then
    source .env
    yarn sls-deploy
else
    echo -e '\033[91mPlease setup .env file'
    exit 1
fi