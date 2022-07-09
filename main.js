const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

window.addEventListener("mousemove", (e) => {
  const clientX = e.clientX + 'px';
  const clientY = e.clientY + 'px';
  //좌표 표시
  tag.innerHTML = `${e.clientX}px, ${e.clientY}px`
  //span 좌표이동
  tag.style.left = clientX;
  tag.style.top = clientY;
  //가로줄 좌표이동
  horizontal.style.top = clientY;
  //세로줄 좌표이동
  vertical.style.left = clientX;
  //이미지 좌표이동
  target.style.left = clientX;
  target.style.top = clientY;

});