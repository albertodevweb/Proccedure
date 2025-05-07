const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', userRoute);


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
