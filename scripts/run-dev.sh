if [ -e .env ]; then
    source .env
    sls offline start --port $PORT
else
    echo -e '\e[91mPlease setup .env file'
    exit 1
fi