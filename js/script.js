var slide = new Swiper('.swiper', {
    slidesPerView: '1', // 한 슬라이드에 보여줄 갯수
    spaceBetween: 6, // 슬라이드 사이 여백
    loop: false, // 슬라이드 반복 여부
    pagination: true, // pager 여부
    autoplay: { // 자동 슬라이드 설정 
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: { // 버튼 사용자 지정
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 2,
      spaceBetween: 20
        },
        // 화면의 넓이가 640px 이상일 때
    640: {
      slidesPerView: 4,
      spaceBetween: 40
        }
      }
})



