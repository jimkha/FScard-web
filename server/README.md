# DOC

- API: tìm trong `/routes/api` 
    + `// @route GET api/cards` nghĩa là gửi request get đếnlocalhost:5000/api/cards.
    + `// @desc Get all cards by mode`: miêu tả dùng làm gì?.
    + `// @access Private`: tự hiểu.
- Middleware: Xác thực user theo kiểu `jwtoken` tìm trong `/routes/middleware`
- Dùng Login API GOOGLE:  tokenGG -> server -> tạo ra pirate token của mình với mật mã jwtSecret trong `.env` -> client -> save trong local

# SET UP

- change .env.exmaple to .env
- npm install
- npm run server
