# SimpliDots - Movie App

Aplikasi Test Frontend Developer, berikut adalah daftar kriteria wajib yang sudah dikerjakan :

| Task                              | Type             | Keterangan                                 |
| :-------------------------------- | :--------------- | :----------------------------------------- |
| `Mark as Favorite`                | `kriteria wajib` | **DONE**                                   |
| `Intergasi API`                   | `kriteria wajib` | **DONE**                                   |
| `Tampilan Film, Favorite, Detail` | `kriteria wajib` | **DONE**                                   |
| `Responsif`                       | `kriteria wajib` | **DONE** -> smartphone, tablet, laptop, pc |
| `Penyimpanan Lokal`               | `kriteria wajib` | **DONE** -> PWA                            |
| `Angular Version`                 | `kriteria wajib` | **DONE** -> v16.1.0                        |
| `Clean Code`                      | `Optional`       | **DONE**                                   |
| `Multiple Bahasa`                 | `Optional`       | **DONE** -> idn dan en                     |
| `Reusable Component`              | `Optional`       | **DONE** -> component, indirective         |
| `Unit Testing`                    | `Optional`       | **DONE** -> Jest 100% coverage             |
| `PWA (Progressive Web App)`       | `Optional`       | **DONE** -> mode offline                   |
| `Infinite Scroll`                 | `Optional`       | **DONE** -> ngx-infinite-scroll            |

## Setup & Run

### Setup

Untuk setup project ini, buka terminal lalu jalankan :

```
  git clone https://github.com/eldrians/simplidots.git
```

buka aplikasi, buka terminal lagi, lalu jalankan

```
  npm i
```

```
  ng serve
```

### Run App

ada 2 cara yang diantaranya :

- Jalan tanpa PWA

```
  npm run start
```

- Dengan PWA

```
  ng build
```

masuk ke dist/simplidots, lalu open integrated terminal dan run command dibawah

```
  http-server -o
```

### Run Test

- Test keseluruhan file

```
  npm run test
```

- Test spesifik file

```
  npx jest <nama file>
```

- Lihat coverage test

```
  npx jest test:coverage
```

## Documentation

### Demo

#### Mark as Favorite

![mark-as-fav](https://github.com/eldrians/simplidots/assets/91566708/3193886c-05f2-48b4-80a6-c12d9a692c86)


#### Detail

![hp](https://github.com/eldrians/simplidots/assets/91566708/aebf34f7-d29e-469d-8b72-b9d4f8131d30)

![laptop-detail](https://github.com/eldrians/simplidots/assets/91566708/5d2d4d41-6613-4729-b036-273b5c472184)


#### Reponsive

![responsive](https://github.com/eldrians/simplidots/assets/91566708/b8170186-1ec9-4974-8b19-5a679958b260)


#### Infinite Scroll

![infiniteScroll](https://github.com/eldrians/simplidots/assets/91566708/f72baa1c-5524-4981-a642-88622db4261e)


#### PWA (mode offline)

![pwa](https://github.com/eldrians/simplidots/assets/91566708/fa50d1f1-f995-4dfe-868b-c3257f2824ed)


### Unit Test

#### coverage

walaupun sudah 100% namun, ada beberapa file yang tidak sempat di test, dikarenakan masih belum mengerti tentang unit test pada standalone component
![image](https://github.com/eldrians/simplidots/assets/91566708/89488e86-0634-4242-8c88-e83c40e3c01f)


## API Reference

Di bawah ini adalah daftar API dari https://developer.themoviedb.org/reference/intro/getting-started yang dipakai untuk pengembangan aplikasi, diantaranya:

- DISCOVER - Movie

```http
  GET https://api.themoviedb.org/3/discover/movie
```

- MOVIES - Details

```http
  GET https://api.themoviedb.org/3/movie/{movie_id}
```

- ACCOUNT - Add Favorite

```http
  POST https://api.themoviedb.org/3/account/{account_id}/favorite
```

- ACCOUNT - Favorite Movie

```http
  GET https://api.themoviedb.org/3/account/{account_id}/favorite/movies
```
