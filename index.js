const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(cors());
app.use(express.json());

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { id: 1,  title: "وسایل نقلیه" },
  { id: 2,  title: "املاک" },
  { id: 3,  title: "الکترونیک" },
  { id: 4,  title: "لوازم خانگی" },
  { id: 5,  title: "پوشاک و مد" },
  { id: 6,  title: "کتاب و مجله" },
  { id: 7,  title: "ورزش و سرگرمی" },
  { id: 8,  title: "خدمات" },
  { id: 9,  title: "آموزش" },
  { id: 10, title: "دیجیتال و آنلاین" },
  { id: 11, title: "باغبانی و گیاه" },
  { id: 12, title: "حیوانات خانگی" }
];

const locations = [
  { id: 1,  title: "تهران" },
  { id: 2,  title: "اصفهان" },
  { id: 3,  title: "شیراز" },
  { id: 4,  title: "تبریز" },
  { id: 5,  title: "مشهد" },
  { id: 6,  title: "اهواز" },
  { id: 7,  title: "کرج" },
  { id: 8,  title: "قم" },
  { id: 9,  title: "رشت" },
  { id: 10, title: "کرمانشاه" },
  { id: 11, title: "ارومیه" },
  { id: 12, title: "زاهدان" }
];

const users = [
  { id: 1, name: "Ignatius",  email: "ignatius78@example.net",        password: "password",  phone: "09121234567" },
  { id: 2, name: "Eileen",    email: "eileen4.schaefer@example.org",   password: "password2", phone: "09156458795" },
  { id: 3, name: "علی رضایی", email: "ali@example.com",               password: "password",  phone: "09131112233" }
];

let ads = [
  {
    "id": 1,
    "title": "پراید مدل ۱۳۹۵",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 1,
      "title": "وسایل نقلیه"
    },
    "location": {
      "id": 1,
      "title": "تهران"
    },
    "description": "خودرو در حد نو، بدون تصادف، یک دست رنگ",
    "views": 240,
    "gps": {
      "latitude": "35.6892",
      "longitude": "51.3890"
    },
    "price": 85000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-01-10T08:00:00.000000Z",
    "updated_at": "2024-01-10T08:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/car.png"
  },
  {
    "id": 2,
    "title": "آپارتمان ۸۰ متری در اصفهان",
    "owner": {
      "name": "Eileen",
      "email": "eileen4.schaefer@example.org"
    },
    "category": {
      "id": 2,
      "title": "املاک"
    },
    "location": {
      "id": 2,
      "title": "اصفهان"
    },
    "description": "آپارتمان دو خوابه، طبقه سوم، آسانسور دار",
    "views": 512,
    "gps": {
      "latitude": "32.6539",
      "longitude": "51.6660"
    },
    "price": 2500000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-01-12T09:30:00.000000Z",
    "updated_at": "2024-01-12T09:30:00.000000Z",
    "user_id": 2,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/home.png"
  },
  {
    "id": 3,
    "title": "لپ‌تاپ Dell Inspiron",
    "owner": {
      "name": "علی رضایی",
      "email": "ali@example.com"
    },
    "category": {
      "id": 3,
      "title": "الکترونیک"
    },
    "location": {
      "id": 5,
      "title": "مشهد"
    },
    "description": "لپ‌تاپ Dell با رم ۱۶ گیگ و SSD 512، در حد نو",
    "views": 189,
    "gps": {
      "latitude": "36.2605",
      "longitude": "59.6168"
    },
    "price": 35000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-01-15T11:00:00.000000Z",
    "updated_at": "2024-01-15T11:00:00.000000Z",
    "user_id": 3,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/laptop Dell.png"
  },
  {
    "id": 4,
    "title": "یخچال فریزر ساید بای ساید",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 4,
      "title": "لوازم خانگی"
    },
    "location": {
      "id": 1,
      "title": "تهران"
    },
    "description": "یخچال دو درب ۲۰ فوت، نو، با گارانتی",
    "views": 320,
    "gps": {
      "latitude": "35.7219",
      "longitude": "51.3347"
    },
    "price": 45000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-01-18T14:00:00.000000Z",
    "updated_at": "2024-01-18T14:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/R side.png"
  },
  {
    "id": 5,
    "title": "دوره آموزش جاوا اسکریپت",
    "owner": {
      "name": "Eileen",
      "email": "eileen4.schaefer@example.org"
    },
    "category": {
      "id": 9,
      "title": "آموزش"
    },
    "location": {
      "id": 7,
      "title": "کرج"
    },
    "description": "دوره جامع آموزش JavaScript از صفر تا پیشرفته",
    "views": 875,
    "gps": {
      "latitude": "35.8355",
      "longitude": "50.9988"
    },
    "price": 1500000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-01-20T10:00:00.000000Z",
    "updated_at": "2024-01-20T10:00:00.000000Z",
    "user_id": 2,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/js course.png"
  },
  {
    "id": 6,
    "title": "کتاب Clean Code",
    "owner": {
      "name": "علی رضایی",
      "email": "ali@example.com"
    },
    "category": {
      "id": 6,
      "title": "کتاب و مجله"
    },
    "location": {
      "id": 3,
      "title": "شیراز"
    },
    "description": "کتاب Clean Code نوشته رابرت مارتین، چاپ اول",
    "views": 143,
    "gps": {
      "latitude": "29.5918",
      "longitude": "52.5836"
    },
    "price": 350000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-01-22T08:30:00.000000Z",
    "updated_at": "2024-01-22T08:30:00.000000Z",
    "user_id": 3,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/clean code.png"
  },
  {
    "id": 7,
    "title": "دوچرخه کوهستان",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 7,
      "title": "ورزش و سرگرمی"
    },
    "location": {
      "id": 4,
      "title": "تبریز"
    },
    "description": "دوچرخه ۲۶ اینچ، ۲۱ دنده، مناسب کوهستان",
    "views": 267,
    "gps": {
      "latitude": "38.0962",
      "longitude": "46.2738"
    },
    "price": 12000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-01-25T13:00:00.000000Z",
    "updated_at": "2024-01-25T13:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/Bycycle.png"
  },
  {
    "id": 8,
    "title": "طراحی سایت حرفه‌ای",
    "owner": {
      "name": "Eileen",
      "email": "eileen4.schaefer@example.org"
    },
    "category": {
      "id": 8,
      "title": "خدمات"
    },
    "location": {
      "id": 9,
      "title": "رشت"
    },
    "description": "طراحی سایت با React و Laravel، تحویل ۱۰ روزه",
    "views": 430,
    "gps": {
      "latitude": "37.2809",
      "longitude": "49.5832"
    },
    "price": 8000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-01-28T09:00:00.000000Z",
    "updated_at": "2024-01-28T09:00:00.000000Z",
    "user_id": 2,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/site.png"
  },
  {
    "id": 9,
    "title": "گوشی Samsung Galaxy S23",
    "owner": {
      "name": "علی رضایی",
      "email": "ali@example.com"
    },
    "category": {
      "id": 3,
      "title": "الکترونیک"
    },
    "location": {
      "id": 1,
      "title": "تهران"
    },
    "description": "گوشی سامسونگ S23، ۲۵۶ گیگ، بدون خش",
    "views": 610,
    "gps": {
      "latitude": "35.6892",
      "longitude": "51.3890"
    },
    "price": 28000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-02-01T10:00:00.000000Z",
    "updated_at": "2024-02-01T10:00:00.000000Z",
    "user_id": 3,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/S21 phone.png"
  },
  {
    "id": 10,
    "title": "ست مبل راحتی",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 4,
      "title": "لوازم خانگی"
    },
    "location": {
      "id": 6,
      "title": "اهواز"
    },
    "description": "ست مبل ۷ نفره چرم طبیعی، رنگ کرم",
    "views": 198,
    "gps": {
      "latitude": "31.3183",
      "longitude": "48.6706"
    },
    "price": 95000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-02-05T11:00:00.000000Z",
    "updated_at": "2024-02-05T11:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/sofa.png"
  },
  {
    "id": 11,
    "title": "پکیج آموزش React",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 10,
      "title": "دیجیتال و آنلاین"
    },
    "location": {
      "id": 1,
      "title": "تهران"
    },
    "description": "پکیج کامل آموزش React از مقدماتی تا پیشرفته",
    "views": 321,
    "gps": {
      "latitude": "35.6892",
      "longitude": "51.3890"
    },
    "price": 2000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-02-08T08:00:00.000000Z",
    "updated_at": "2024-02-08T08:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/React course.png"
  },
  {
    "id": 12,
    "title": "سگ گلدن رتریور",
    "owner": {
      "name": "Eileen",
      "email": "eileen4.schaefer@example.org"
    },
    "category": {
      "id": 12,
      "title": "حیوانات خانگی"
    },
    "location": {
      "id": 2,
      "title": "اصفهان"
    },
    "description": "توله سگ گلدن ۲ ماهه، واکسینه و سالم",
    "views": 445,
    "gps": {
      "latitude": "32.6539",
      "longitude": "51.6660"
    },
    "price": 15000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-02-10T14:00:00.000000Z",
    "updated_at": "2024-02-10T14:00:00.000000Z",
    "user_id": 2,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/Dog.png"
  },
  {
    "id": 13,
    "title": "ماشین لباسشویی ال‌جی",
    "owner": {
      "name": "علی رضایی",
      "email": "ali@example.com"
    },
    "category": {
      "id": 4,
      "title": "لوازم خانگی"
    },
    "location": {
      "id": 5,
      "title": "مشهد"
    },
    "description": "ماشین لباسشویی ۷ کیلو، کم‌مصرف، نو",
    "views": 276,
    "gps": {
      "latitude": "36.2605",
      "longitude": "59.6168"
    },
    "price": 18000000,
    "link": "https://laraplus.ir",
    "stars": 4,
    "created_at": "2024-02-12T09:00:00.000000Z",
    "updated_at": "2024-02-12T09:00:00.000000Z",
    "user_id": 3,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/LG washing.png"
  },
  {
    "id": 14,
    "title": "تبلت iPad Pro",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 3,
      "title": "الکترونیک"
    },
    "location": {
      "id": 1,
      "title": "تهران"
    },
    "description": "آیپد پرو ۱۱ اینچ، ۲۵۶ گیگ، با قلم اپل",
    "views": 534,
    "gps": {
      "latitude": "35.7219",
      "longitude": "51.3347"
    },
    "price": 42000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-02-15T10:30:00.000000Z",
    "updated_at": "2024-02-15T10:30:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/Ipad.png"
  },
  {
    "id": 15,
    "title": "خانه ویلایی در شیراز",
    "owner": {
      "name": "Ignatius",
      "email": "ignatius78@example.net"
    },
    "category": {
      "id": 2,
      "title": "املاک"
    },
    "location": {
      "id": 3,
      "title": "شیراز"
    },
    "description": "خانه ویلایی ۳۰۰ متر زمین، ۱۵۰ متر بنا، استخر دار",
    "views": 892,
    "gps": {
      "latitude": "29.5918",
      "longitude": "52.5836"
    },
    "price": 8500000000,
    "link": "https://laraplus.ir",
    "stars": 5,
    "created_at": "2024-02-18T08:00:00.000000Z",
    "updated_at": "2024-02-18T08:00:00.000000Z",
    "user_id": 1,
    "image": "https://raw.githubusercontent.com/hamidmorradi/laraclassified-postman/main/assets/images/villa.png"
  }
];

// توکن‌های فعال
let tokens = {
  "4|e5NKywI72UNLK42MluW0W2tbZlO1ARWTkqosG2ldf7407975": 1
};

let nextAdId = 16;
let nextUserId = 4;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function generateToken(userId) {
  const rand = Math.random().toString(36).substring(2, 15);
  const token = `${userId}|${rand}${Date.now()}`;
  tokens[token] = userId;
  return token;
}

function getUserFromToken(req) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return null;
  const token = auth.substring(7);
  const userId = tokens[token];
  if (!userId) return null;
  return users.find(u => u.id === userId) || null;
}

function now() {
  return new Date().toISOString().replace('T', 'T').replace('Z', '.000000Z');
}

// ─── ROUTES ──────────────────────────────────────────────────────────────────

// POST /login
app.post('/api/v1/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "اطلاعات ورود اشتباه است" });
  }
  const token = generateToken(user.id);
  res.json({
    data: {
      token,
      user: { id: user.id, name: user.name, email: user.email, phone: user.phone }
    }
  });
});

// POST /register
app.post('/api/v1/register', (req, res) => {
  const { name, email, phone, password, password_confirmation } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ message: "اطلاعات ناقص است", errors: { email: ["فیلد ایمیل الزامی است"] } });
  }
  if (password !== password_confirmation) {
    return res.status(422).json({ message: "تایید رمز عبور مطابقت ندارد", errors: { password: ["تایید رمز عبور مطابقت ندارد"] } });
  }
  if (users.find(u => u.email === email)) {
    return res.status(422).json({ message: "این ایمیل قبلاً ثبت شده است", errors: { email: ["این ایمیل قبلاً استفاده شده"] } });
  }
  const newUser = { id: nextUserId++, name, email, phone: phone || '', password };
  users.push(newUser);
  const token = generateToken(newUser.id);
  res.status(201).json({
    data: {
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone }
    }
  });
});

// POST /account/logout
app.post('/api/v1/account/logout', (req, res) => {
  const auth = req.headers['authorization'];
  if (auth && auth.startsWith('Bearer ')) {
    delete tokens[auth.substring(7)];
  }
  res.json({ message: "با موفقیت خارج شدید" });
});

// GET /account/listing
app.get('/api/v1/account/listing', (req, res) => {
  const user = getUserFromToken(req);
  if (!user) return res.status(401).json({ message: "احراز هویت لازم است" });
  const userAds = ads.filter(a => a.user_id === user.id);
  res.json({ data: userAds });
});

// GET /account/listing/:id
app.get('/api/v1/account/listing/:id', (req, res) => {
  const user = getUserFromToken(req);
  if (!user) return res.status(401).json({ message: "احراز هویت لازم است" });
  const ad = ads.find(a => a.id === parseInt(req.params.id) && a.user_id === user.id);
  if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
  res.json({ data: ad });
});

// DELETE /account/listing/:id
app.delete('/api/v1/account/listing/:id', (req, res) => {
  const user = getUserFromToken(req);
  if (!user) return res.status(401).json({ message: "احراز هویت لازم است" });
  const idx = ads.findIndex(a => a.id === parseInt(req.params.id) && a.user_id === user.id);
  if (idx === -1) return res.status(404).json({ message: "آگهی پیدا نشد" });
  ads.splice(idx, 1);
  res.json({ message: "آگهی با موفقیت حذف شد" });
});

// POST /account/submit
app.post('/api/v1/account/submit', upload.single('image'), (req, res) => {
  const user = getUserFromToken(req);
  if (!user) return res.status(401).json({ message: "احراز هویت لازم است" });
  const { title, category_id, location_id, price, link, description } = req.body;
  if (!title || !category_id || !location_id || !price) {
    return res.status(422).json({ message: "اطلاعات ناقص است" });
  }
  const cat = categories.find(c => c.id === parseInt(category_id));
  const loc = locations.find(l => l.id === parseInt(location_id));
  const newAd = {
    id: nextAdId++,
    title,
    owner: { name: user.name, email: user.email },
    category: cat || { id: parseInt(category_id), title: "سایر" },
    location: loc || { id: parseInt(location_id), title: "سایر" },
    description: description || '',
    views: 0,
    gps: { latitude: "35.6892", longitude: "51.3890" },
    price: parseInt(price),
    link: link || '',
    stars: 0,
    image: "https://picsum.photos/seed/new" + nextAdId + "/400/300",
    created_at: now(),
    updated_at: now(),
    user_id: user.id
  };
  ads.push(newAd);
  res.status(201).json({ data: newAd, message: "آگهی با موفقیت ثبت شد" });
});

// GET /ads
app.get('/api/v1/ads', (req, res) => {
  let result = [...ads];
  const { category, location, keyword, sort } = req.query;
  if (category) result = result.filter(a => a.category.id === parseInt(category));
  if (location) result = result.filter(a => a.location.id === parseInt(location));
  if (keyword)  result = result.filter(a => a.title.includes(keyword) || a.description.includes(keyword));
  if (sort === 'price_asc')  result.sort((a, b) => a.price - b.price);
  if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'newest')     result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (sort === 'views')      result.sort((a, b) => b.views - a.views);
  res.json({ data: result });
});

// GET /categories
app.get('/api/v1/categories', (req, res) => {
  res.json({ data: categories });
});

// GET /locations
app.get('/api/v1/locations', (req, res) => {
  res.json({ data: locations });
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'LaraClassified Mock API is running 🚀' });
});

// ─── START ───────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ LaraClassified API running on port ${PORT}`);
});
