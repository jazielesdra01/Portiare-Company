@echo off
REM Script de verificação antes de deployment (Windows)

echo.
echo 🔍 Verificando se tudo está pronto para deployment...
echo.

REM Verificar Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não está instalado
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js instalado: %NODE_VERSION%

REM Verificar npm
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm não está instalado
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm instalado: %NPM_VERSION%

REM Verificar arquivos principais
echo.
echo 📋 Verificando arquivos:

if exist "backend\package.json" (
    echo ✅ backend\package.json existe
) else (
    echo ❌ backend\package.json não encontrado
    pause
    exit /b 1
)

if exist "backend\server.js" (
    echo ✅ backend\server.js existe
) else (
    echo ❌ backend\server.js não encontrado
    pause
    exit /b 1
)

if exist "index.html" (
    echo ✅ index.html existe
) else (
    echo ❌ index.html não encontrado
    pause
    exit /b 1
)

REM Verificar se node_modules está instalado
echo.
if exist "backend\node_modules" (
    echo ✅ Dependências instaladas
) else (
    echo ⚠️  Dependências não instaladas
    echo    Execute: cd backend ^&^& npm install
)

REM Verificar .env
echo.
if exist "backend\.env" (
    echo ✅ Arquivo .env existe
) else (
    echo ⚠️  Arquivo .env não existe
    echo    Criando a partir de .env.example...
    copy backend\.env.example backend\.env
)

REM Verificar git
echo.
if exist ".git" (
    echo ✅ Repositório Git existe
) else (
    echo ⚠️  Git não inicializado
)

echo.
echo ✅ Tudo pronto para deployment!
echo.
echo Próximas etapas:
echo 1. cd backend ^&^& npm install (se ainda não fez)
echo 2. npm start (para testar localmente)
echo 3. Seguir instruções em DEPLOYMENT.md para colocar no ar
echo.
pause
