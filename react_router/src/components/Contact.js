import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      isRedirect: false,
      fName: "",
      fEmail: "",
      fPhone: "",
      fMess: "",
      fNgay:"thu7"
    }
  }
  isChange = (event) =>{
    const ten=event.target.name;
    const giatri= event.target.value;
    this.setState({     //Handling Multiple Input,form input reactJs
        [ten]:giatri
    }); 
  }
  isFileChange = (event) =>{
    const tenanh=event.target.files[0].name;
    this.setState({
      fAnh:tenanh
    });
  }
  submitForm = (event) =>{
      event.preventDefault();
      this.setState({
        isRedirect:true
      });
  }



  getGiaTri =() =>{
    var noiDung="";
    noiDung += "Ten nhan duoc la: "+ this.state.fName;
    noiDung += "Email nhan duoc la: "+ this.state.fEmail;
    noiDung += "SDT nhan duoc la: "+ this.state.fPhone;
    noiDung += "Tin nhan nhan duoc la: "+ this.state.fMess;
    noiDung += "Ngay nhan duoc la: "+ this.state.fNgay;
    noiDung += "Anh nhan duoc la: "+ this.state.fAnh;
    return noiDung;
  }

    render() {
      if(this.state.isRedirect){        
        console.log(this.getGiaTri());
        
        return <Redirect to="/home"/>;
      }
        return (
            <div>
            <div>
  {/* header */}
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Trang danh sach tin tuc</h1>
            <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  {/* <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="react router demo"> */}
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* end_header */}
  {/* begin contact */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên Hệ Với Chúng Tôi</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        {/* <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><i className="fas fa-star"></i></div> */}
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form*/}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />

{/* Select Ngày */}
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Chọn ngày</label>
                <div className="form-group">
                  <label ></label>
                  <select defaultValue={this.state.fNgay} className="form-control" name="fNgay" onChange={(event) => this.isChange(event)}>
                    <option value="thu3">Ngày thứ 3</option>
                    <option value="thu5">Ngày thứ 5</option>
                    <option value="thu7">Ngày thứ 7</option>
                    <option value="Chủ nhật">Ngày chủ nhật</option>
                  </select>
                </div>
                <p className="help-block text-danger" />
              </div>
            </div>
            <br/>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Chọn Ảnh</label>
                
               
                  
                  <input onChange={(event)=> this.isFileChange(event)} type="file" className="form-control-file" name="fAnh" />
                 
               

                <p className="help-block text-danger" />
              </div>
            </div>

          
            <br/>
            <div id="success" />
            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={(event) => {
              this.submitForm(event)
            }}>Send</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end contact */}
</div>

                
            </div>
        );
    }
}

export default Contact;