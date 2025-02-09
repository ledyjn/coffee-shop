document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const menu = params.get('menu');

  const menuData = {
    espresso: {
      title: 'Espresso',
      image: 'espresso.svg',
      description: 'Kopi hitam pekat dengan rasa kuat.',
      price: 'Rp 25.000',
      thumbnails: ['espresso1.svg', 'espresso2.svg', 'espresso3.svg'],
    },
    cappuccino: {
      title: 'Cappuccino',
      image: 'capucino.svg',
      description: 'Kombinasi espresso, susu, dan busa susu.',
      price: 'Rp 30.000',
      thumbnails: ['cap1.svg', 'cap2.svg', 'cap3.svg'],
    },
    latte: {
      title: 'Latte',
      image: 'latte.svg',
      description: 'Espresso dengan susu yang creamy.',
      price: 'Rp 35.000',
      thumbnails: ['latte1.svg', 'latte2.svg', 'latte3.svg'],
    },
  };

  // JavaScript untuk Image Slider
  const images = [
    'capucino.svg', // Gambar utama
    'latte.svg', // Gambar tambahan 1
    'espresso.svg', // Gambar tambahan 2
    'capucino.svg', // Gambar tambahan 3
  ];

  let currentIndex = 0; // Indeks gambar saat ini

  // Elemen DOM
  const mainImage = document.getElementById('main-product-image');
  const leftButton = document.querySelector('.left-btn');
  const rightButton = document.querySelector('.right-btn');

  // Fungsi untuk mengganti gambar
  function updateImage(index) {
    mainImage.src = images[index];
  }

  // Event Listener untuk tombol kiri
  leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Looping mundur
    updateImage(currentIndex);
  });

  // Event Listener untuk tombol kanan
  rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Looping maju
    updateImage(currentIndex);
  });

  // Inisialisasi gambar pertama
  updateImage(currentIndex);

  if (menuData[menu]) {
    const product = menuData[menu];
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('main-image').src = product.image;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = product.price;

    const thumbnailContainer = document.querySelector('.thumbnail-images');
    thumbnailContainer.innerHTML = product.thumbnails
      .map((src) => `<img class="thumbnail" src="${src}" alt="Thumbnail" />`)
      .join('');
  } else {
    document.body.innerHTML = "<h2>Menu tidak ditemukan</h2><a href='index.html'>Kembali</a>";
  }
});
