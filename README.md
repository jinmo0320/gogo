# gogo (제목 미정)

## Setup

루트 폴더에 `.env` 파일을 만들고 아래 내용을 입력합니다.

```env
VITE_KAKAOMAP_API_KEY=key_here
```

## 데이터 구조

각 장소가 가지는 데이터

```jsonc
{
  "id": "...",
  "title": "...",
  "coords": { "lat": 0, "lng": 0 }, // 위도, 경도
  "diary": "...", // 글
  "pics": ["...", "...", "..."], // 개수 제한 필요
  "authorId": "..."
}
```
