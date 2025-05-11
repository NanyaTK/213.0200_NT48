rm -r docs/
mkdir docs
touch docs/.nojekyll
rm -r 213.0201_NT48/docs/
cd 213.0201_NT48/
mkdir docs
dotnet publish -c Release
cd ../
cp -r 213.0201_NT48/docs/wwwroot/* ./docs/