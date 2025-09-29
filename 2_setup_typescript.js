/*
1. inisialisasi project typescript
npm init -y
pastikan muncul file baru package.json

2. instalasi & konfigurasi
pastikan berada dalam folder projectnya
npm install --save-dev typescript

membuat file konfigurasi typescript :
tsc --init
pastikan muncul file tsconfig.json

buka file tsconfig.json
cari kode berikut :
{
  "compilerOptions": {
  
  	//...
  	
  	//...
  	
  	// "rootDir": "./"

  	// "outDir": "./"
  	
  }
}

menjadi 
{
  "compilerOptions": {
  
  	//...
  	
  	//...
  	
  	"rootDir": "./src"
  	
		"outDir": "./dist"
  	
  }
}

rootDir ke folder rsc = tempat menulis kode typescript
outDir = diarahkan ke folder dist, menampung hasil kompilasi

3. Struktur folder project :
buat struktur folder :
belajar-stypescript/
│── src/
│   ├── index.ts
│── dist/
│── package.json
│── tsconfig.json

4. Menjalankan typescript compiling otomatis
npm install --save-dev nodemon

buka file package.json lalu ubah kode seperti berikut :
"scripts": {
  "build": "tsc",
  "start": "nodemon dist/index.js",
  "dev": "tsc --watch"
}

jalankan :
npm run dev



*/