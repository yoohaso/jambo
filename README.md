# Jambo

```
npm install
npm run dev
```

### 기술스택
- React
- TypeScript
- Tailwind CSS
- ky

### 완료 사항
- figma와 동일한 UI/UX로 구현
- 반응형 디자인을 적용하여 PC, 모바일에 대응
- Home에 진입 시 `/api/v1/card`를 호출하여 Card 목록 표시
- 스크롤 시 `hasNext`가 `true`인 경우 다음 페이지 호출 후 목록에 표시
- 숫자 표기법에 따라 `view count`와 `user count` 표시
- 시간 표기법에 따라 `time` 표시
- 무한 스크롤 시 데이터를 불러올 때 로딩 스피너 표시
