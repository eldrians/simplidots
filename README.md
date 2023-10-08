# Project Title

A brief description of what this project does and who it's for

## How To Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Task yang dikerjakan

Berikut adalah daftar kriteria wajib yang sudah dikerjakan :

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
