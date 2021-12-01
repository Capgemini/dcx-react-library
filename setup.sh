echo "Welcome to dcx-react-library"
echo "This script will setup your environment"
echo "removing node_modules from dcx-react-library..."
rm -rf node_modules/ 
echo "installing library for dcx-react-library"
yarn install
echo "unlinking previous link for react,react-dom, dcx-react-library"
yarn unlink 
cd node_modules/react
yarn unlink
cd ../../node_modules/react-dom
yarn unlink
cd ../../
echo "building library..."
rm -rf dist/
yarn build
echo "link library"
yarn link
echo "link react"
cd node_modules/react
yarn link
echo "link react-dom"
cd ../../node_modules/react-dom
yarn link
echo "removing node_modules from the example folder..."
cd ../../example
rm -rf node_modules/
echo "installing dependencies..."
yarn install
echo "linking library dependencies..."
yarn link "@capgeminiuk/dcx-react-library"
yarn link "react"
yarn link "react-dom"
yarn start