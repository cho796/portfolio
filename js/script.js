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
    content: '<a href="https://www.dropbox.com/scl/fi/5w4tp47jcijmhx10awlp7/pc.pdf?rlkey=1yawepi61p4sass1r7x0qu8qt&st=pl1pju57&dl=0"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://www.dropbox.com/scl/fi/2dp72d4px07zzqwjozcz9/sp.pdf?rlkey=gtjz8y9b5h2pgz4u4q4y41lrx&st=qcd4e9dm&dl=0"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-chiharadai',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://www.dropbox.com/scl/fi/mxahxi6iuwprsbr3rnvlv/pc.pdf?rlkey=2zpu2xck4o9tqeyyxgtpf6hlv&st=nyqiwulg&dl=0"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://www.dropbox.com/scl/fi/2ekbh3zhi2ku0zq75f7rc/sp.pdf?rlkey=06ly738th00lfouktb8uomz0u&st=cfwnkh4r&dl=0"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-yoshidaShikaiin',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://www.dropbox.com/scl/fi/xsk2zmw6715n7pwyanao5/pc.pdf?rlkey=8xkl33owyxoaw2c494ft8b2sc&st=dnqr0uju&dl=0"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://www.dropbox.com/scl/fi/xkz8i43sp3apml3l734aq/sp.pdf?rlkey=p9fek57uoz4xpzgqx8rdk47yh&st=cooreimv&dl=0"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});
new jBox('Modal', {
    width: 305,
    height: 80,
    attach: '#my-modal-wetWipes',
    title: 'PC版またはスマホ版を選んで下さい',
    content: '<a href="https://www.dropbox.com/scl/fi/o97njeg282ro87r191eli/pc.pdf?rlkey=skbnbrk2nus4bw36t3ttjkdee&st=qbf2tgqs&dl=0"><i class="fa-solid fa-computer"></i><br>PC</a><a href="https://www.dropbox.com/scl/fi/npl14fecayln2y27j0xpv/sp.pdf?rlkey=ifkjb88nv8j5javojqlqaf5h7&st=kr6en1r6&dl=0"><i class="fa-solid fa-mobile-screen-button"></i><br>スマホ</a>'
});

AOS.init({
  easing: 'ease-in-out-sine'
});