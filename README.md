# Aplicación de CRUD

Este proyecto es una aplicación de CRUD sencillo con React, TypeScript. Proporciona un CRUD con integración con backend construido en Node.js y Express.

---

## **Tecnologías usadas** 
 
### **Frontend:**
- React
- TypeScript  
- Tailwind CSS
- i18next (para la traducción)

### **Backend:**
- Node.js
- Express
- Prisma (ORM para manejar la base de datos de mysql)
- Swagger (Documentación de API)

---

## **Instalación y configuración**

### **Requisitos previos:**
1. Node.js instalado (v16 o superior).
2. mysql u otra base de datos configurada.
3. Tener `pnpm`, `npm` o `yarn` instalado.

### **Pasos para levantar backend:**

#### **1. Ingrese con la consola al backend e instale las dependencias:**
Desde la raíz del proyecto:
```bash
 cd back
 npm install
```

#### **2. Copie el archivo .env.example y renómbrelo a .env:**
Ajuste los valores según su configuración de base de datos y puerto.
```bash
 cp .env.example .env
```

#### **3. Configure la base de datos con Prisma y levante la aplicación:**
Ejecute las migraciones para crear las tablas necesarias en la base de datos.
```bash
npx prisma migrate dev
npm run dev
```

### **Pasos para levantar frontend:**

#### **1. Ingrese con la consola al frontend e instale las dependencias:**
Desde la raíz del proyecto y en otra terminal.
```bash
 cd front
 npm install
```

#### **2. Copie el archivo .env.example y renómbrelo a .env:**
Ajuste el valor de la URL donde se expone el backend.
```bash
 cp .env.example .env
```

#### **4. Levante la aplicación:**
```bash
npm run dev
```

Con las dos terminales levantadas, podrá ver la página en la URL mostrada por Vite en la consola.

---

## **Para tener en cuenta**

1. Para probar los endpoints, se ha proporcionado un folder de REST Client en el directorio raíz del proyecto de backend. Deberá tener la extensión REST Client en Visual Studio Code. Si aún no la tiene instalada, puede encontrarla [aquí](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)..

2. El frontend en producción se expone en la URL: 
```bash
https://pocket-indol.vercel.app/
```
3. La documentación del backend con Swagger se encuentra en **URL del backend** + **/docs**. Para produccion:

```bash
https://pocket-q81q.onrender.com/docs/
```
---

## **Próximos pasos**
- Implementar autenticación de usuarios.
- Mejorar el diseño visual.
- Agregar soporte para emojis y adjuntos.
- Implementar roles para usuarios y administradores.

---

