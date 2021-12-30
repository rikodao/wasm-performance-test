# 実行手順

## ブラウザ

### 実行環境

Chrome

### 実行方法

python -m SimpleHTTPServer 8080
127.0.0.1:8080 にアクセスして dev tool の console を確認

## サーバーサイド

### 実行環境

node 16

### 実行方法

node main.js

# 結果

## ブラウザで実行した結果

|     | WASM(ms) | JavaScript(ms) |
| --- | -------- | -------------- |
| 1   | 0.05     | 0.04           |
| 2   | 0.02     | 0.02           |
| 3   | 0.02     | 0.02           |
| 4   | 0.02     | 0.03           |
| 5   | 0.02     | 0.02           |
| 6   | 0.04     | 0.03           |
| 7   | 0.02     | 0.02           |
| 8   | 0.05     | 0.03           |
| 9   | 0.03     | 0.05           |
| 10  | 0.04     | 0.03           |
| 11  | 0.03     | 0.04           |
| 12  | 0.06     | 0.04           |
| 13  | 0.02     | 0.04           |
| 14  | 0.02     | 0.05           |
| 15  | 0.02     | 0.06           |
| 16  | 0.03     | 0.10           |
| 17  | 0.04     | 0.18           |
| 18  | 0.04     | 0.21           |
| 19  | 0.06     | 0.32           |
| 20  | 0.08     | 0.59           |
| 21  | 0.12     | 0.82           |
| 22  | 0.18     | 0.31           |
| 23  | 0.28     | 0.49           |
| 24  | 0.51     | 0.82           |
| 25  | 0.76     | 1.29           |
| 26  | 1.19     | 2.04           |
| 27  | 1.76     | 3.17           |
| 28  | 2.84     | 4.97           |
| 29  | 4.35     | 7.45           |
| 30  | 6.80     | 12.02          |
| 31  | 10.50    | 16.32          |
| 32  | 14.59    | 26.58          |
| 33  | 24.22    | 43.56          |
| 34  | 40.72    | 70.73          |
| 35  | 63.02    | 114.08         |
| 36  | 101.86   | 196.61         |
| 37  | 168.32   | 301.39         |
| 38  | 279.42   | 495.50         |
| 39  | 442.27   | 783.47         |
| 40  | 709.98   | 1,291.73       |
| 41  | 1,172.70 | 2,097.90       |
| 42  | 1,884.44 | 3,418.44       |
| 43  | 3,077.18 | 5,512.02       |
| 44  | 4,975.19 | 9,136.85       |
| 45  | 9,723.62 | 14,890.35      |

## サーバーサイド(NodeJS)で実行した結果

|     | WASM(ms) | NodeJS(ms) |
| --- | -------- | ---------- |
| 1   | 0.15     | 0.03       |
| 2   | 0.01     | 0.01       |
| 3   | 0.01     | 0.00       |
| 4   | 0.00     | 0.01       |
| 5   | 0.00     | 0.01       |
| 6   | 0.02     | 0.03       |
| 7   | 0.01     | 0.01       |
| 8   | 0.00     | 0.01       |
| 9   | 0.01     | 0.01       |
| 10  | 0.01     | 0.01       |
| 11  | 0.00     | 0.01       |
| 12  | 0.00     | 0.01       |
| 13  | 0.01     | 0.02       |
| 14  | 0.01     | 0.04       |
| 15  | 0.01     | 0.04       |
| 16  | 0.01     | 0.07       |
| 17  | 0.08     | 5.47       |
| 18  | 0.03     | 0.18       |
| 19  | 0.04     | 0.28       |
| 20  | 0.05     | 0.46       |
| 21  | 0.09     | 0.76       |
| 22  | 0.12     | 1.15       |
| 23  | 0.18     | 1.35       |
| 24  | 0.30     | 0.68       |
| 25  | 0.49     | 1.10       |
| 26  | 0.79     | 1.75       |
| 27  | 1.22     | 2.95       |
| 28  | 2.26     | 5.05       |
| 29  | 3.55     | 8.27       |
| 30  | 5.73     | 12.55      |
| 31  | 8.76     | 19.32      |
| 32  | 13.52    | 30.02      |
| 33  | 19.86    | 42.37      |
| 34  | 30.31    | 69.49      |
| 35  | 48.46    | 115.95     |
| 36  | 79.36    | 185.86     |
| 37  | 127.24   | 306.35     |
| 38  | 225.12   | 509.94     |
| 39  | 344.18   | 816.01     |
| 40  | 574.85   | 1,374.00   |
| 41  | 930.73   | 2,084.00   |
| 42  | 1,451.00 | 3,437.00   |
| 43  | 2,758.00 | 6,183.00   |
| 44  | 4,277.00 | 9,284.00   |
| 45  | 6,581.00 | 15,073.00  |
