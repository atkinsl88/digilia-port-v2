import React from 'react'
import image1 from '../../../../src/assets/home-img-01.jpg'
import image2 from '../../../../src/assets/home-img-02.jpg'

const Content = () => (
  <section>

    <div className="content-container">
      <div className="content-container-top">
        <div className="content-container-top-left">
          <div className="content-heading">
            <p>Development Projects</p>
          </div>
          <div className="content-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices ipsum nec purus dapibus gravida. Aliquam et cursus ligula. Pellentesque maximus turpis eu nisi accumsan, at maximus velit ultricies. Phasellus leo nunc, mollis a urna id, ultricies molestie ante. Sed erat nisi, egestas a lectus in, ultrices lacinia justo. Integer non augue nec turpis pulvinar euismod. In enim eros, fringilla a iaculis vitae, fermentum id purus. Nunc vitae ligula id dui aliquet dictum non a mi. Etiam tempus at lacus eu fermentum. Quisque pretium elementum risus eget vestibulum. Pellentesque tempus interdum eros luctus aliquam. Integer at vehicula augue, sed tristique eros.</p>
          </div>
        </div>
        <div className="content-container-top-right">
          <div className="content-image-right">
            <img src={image1} alt="logo" />
          </div>
        </div>
      </div>
      <div className="content-container-bottom">
        <div className="content-container-bottom-left">
          <div className="content-image-left">
            <img src={image2} alt="logo" />
          </div>
        </div>
        <div className="content-container-bottom-right">
          <div className="content-heading">
            <p>Development Projects</p>
          </div>
          <div className="content-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices ipsum nec purus dapibus gravida. Aliquam et cursus ligula. Pellentesque maximus turpis eu nisi accumsan, at maximus velit ultricies. Phasellus leo nunc, mollis a urna id, ultricies molestie ante. Sed erat nisi, egestas a lectus in, ultrices lacinia justo. Integer non augue nec turpis pulvinar euismod. In enim eros, fringilla a iaculis vitae, fermentum id purus. Nunc vitae ligula id dui aliquet dictum non a mi. Etiam tempus at lacus eu fermentum. Quisque pretium elementum risus eget vestibulum. Pellentesque tempus interdum eros luctus aliquam. Integer at vehicula augue, sed tristique eros.</p>
          </div>
        </div>
      </div>
    </div>

  </section>
)

export default Content