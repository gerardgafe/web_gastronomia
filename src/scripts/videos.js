function initYoutubeEmbeds() {
  document.querySelectorAll('.youtube').forEach((el) => {
    const id = el.dataset.video;

    // miniatura
    el.innerHTML = `
      <source srcset="https://img.youtube.com/vi/${id}/hqdefault.jpg?as=webp" type="image/webp"/>
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="video">
      <div class="play">▶</div>`;

    // click
    el.addEventListener('click', () => {
      el.innerHTML = `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>`;
    });
  });
}

document.addEventListener('DOMContentLoaded', initYoutubeEmbeds);