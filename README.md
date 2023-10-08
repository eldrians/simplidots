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

gif

#### Detail

gif

#### PWA (mode offline)

gif

### Unit Test

#### coverage

png

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
