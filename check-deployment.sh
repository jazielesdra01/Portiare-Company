#!/bin/bash

# Script de verificação antes de deployment

echo "🔍 Verificando se tudo está pronto para deployment..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado"
    exit 1
fi
echo "✅ Node.js instalado: $(node --version)"

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não está instalado"
    exit 1
fi
echo "✅ npm instalado: $(npm --version)"

# Verificar arquivos principais
echo ""
echo "📋 Verificando arquivos:"

if [ -f "backend/package.json" ]; then
    echo "✅ backend/package.json existe"
else
    echo "❌ backend/package.json não encontrado"
    exit 1
fi

if [ -f "backend/server.js" ]; then
    echo "✅ backend/server.js existe"
else
    echo "❌ backend/server.js não encontrado"
    exit 1
fi

if [ -f "index.html" ]; then
    echo "✅ index.html existe"
else
    echo "❌ index.html não encontrado"
    exit 1
fi

# Verificar se node_modules está instalado
echo ""
if [ -d "backend/node_modules" ]; then
    echo "✅ Dependências instaladas"
else
    echo "⚠️  Dependências não instaladas"
    echo "   Execute: cd backend && npm install"
fi

# Verificar .env
echo ""
if [ -f "backend/.env" ]; then
    echo "✅ Arquivo .env existe"
else
    echo "⚠️  Arquivo .env não existe"
    echo "   Criando a partir de .env.example..."
    cp backend/.env.example backend/.env
fi

# Verificar git
echo ""
if [ -d ".git" ]; then
    echo "✅ Repositório Git existe"
    echo "   Remote: $(git config --get remote.origin.url 2>/dev/null || echo 'Nenhum remote configurado')"
else
    echo "⚠️  Git não inicializado"
fi

echo ""
echo "✅ Tudo pronto para deployment!"
echo ""
echo "Próximas etapas:"
echo "1. cd backend && npm install (se ainda não fez)"
echo "2. npm start (para testar localmente)"
echo "3. Seguir instruções em DEPLOYMENT.md para colocar no ar"
