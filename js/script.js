document.addEventListener('click', (e) => {

  const openBtn = e.target.closest('[data-popup]');
  if (openBtn) {
    const id = openBtn.dataset.popup;
    document.getElementById(id).classList.remove('active');
    document.getElementById(id).classList.add('popupIn');
    return;
  }

  if (e.target.closest('.popupCls')) {
    const popup = e.target.closest('.popup');
    popup.classList.add('active');
    return;
  }

});

new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-pulseHorizon',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://drive.google.com/file/d/1BEoCoFNzkTgA5SaHwn6uzJcQuxkRvexT/view?usp=sharing"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://drive.google.com/file/d/1n8hPLozZYwFSy8IKQtYk2dxkmizTA4UU/view?usp=sharing"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-chiharadai',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://drive.google.com/file/d/1GWDTyqp2PLVPEDdWqooSzuUGHmUvox9N/view?usp=sharing"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://drive.google.com/file/d/1w50_RGna7hmll_7u6UZsB1DJ8FHGtxtv/view?usp=sharing"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-yoshidaShikaiin',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://drive.google.com/file/d/10UsyweEJ-9qixNvbjcHYTCRlmMX77RQz/view?usp=sharing"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://drive.google.com/file/d/1XbHLEt7bsAsmOEfZKnDOBnEIB3PK13Pp/view?usp=sharing"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-wetWipes',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://drive.google.com/file/d/1kim5oKOtF_Tb1NjAmVd4Hw1LfFZ7JRoL/view?usp=sharing"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://drive.google.com/file/d/1kgJA84Ocqbn8QeF7jQIZYautaJXs6ZL4/view?usp=sharing"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});

AOS.init({
  easing: 'ease-in-out-sine'
});