if [ -e .env ]; then
    source .env
    if [ ! "$(docker ps -q -f name=$DYNAMO_CONTAINER_NAME)" ]; then
        yarn setup
    fi
    yarn start --port $PORT
else
    echo -e '\e[91mPlease setup .env file'
    exit 1
fi