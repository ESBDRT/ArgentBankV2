function Features({content, image, alt, title}) {
    return (
        <div class="feature-item">
          <img src={image} alt={alt} class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {content}
          </p>
        </div>
      );
}

export default Features;