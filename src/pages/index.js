document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    const pupil = eye.querySelector('.pupil');
    const eyeRect = eye.getBoundingClientRect();

    // 눈 중심 좌표 구하기
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // 마우스 위치에서 눈 중심까지의 거리 계산
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;

    // 각도 계산 (radian -> degree)
    const angle = Math.atan2(deltaY, deltaX);

    // 눈동자의 최대 이동 반경 (눈 크기의 1/3 정도)
    const maxDistance = eyeRect.width / 3;
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    // 눈동자 이동 적용
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
