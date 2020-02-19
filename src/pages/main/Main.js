import React, { Component } from 'react';
import Header from "../../components/Header";
import FeedItem from "../../components/FeedItem";
import profile3 from '../../images/profile3.jpg'
import profile4 from '../../images/profile4.jpg';
import profile5 from '../../images/profile5.jpg';
import profile6 from '../../images/profile6.jpg';
import profile7 from '../../images/profile7.jpg';
import profile8 from '../../images/profile8.jpg';
import profile9 from '../../images/profile9.jpg';
import profile10 from '../../images/profile10.jpg';
import './Main.css';

class Main extends Component {
  render(){
    return(
      <div className="mainWrap">
        {/*</div>!--// header*/}
        <Header/>
        {/*<!--section-->*/}
        <div className="section">

          {/*<!--sectionLeft-->*/}
          <div className="sectionLeft">
            <FeedItem/>
          </div>
          {/*!<--//sectionLeft-->*/}

          {/*<!--sectionRight-->*/}
          <div className="sectionRight">
            <div className="sectionProfile">
              <div className="sectionProfile_image"><a href="https://www.instagram.com/wecode_bootcamp/"><img src={profile3} alt="위코드 프로필 사진"/></a></div>
              <dl className="sectionProfile_text">
                <dt><a href="https://www.instagram.com/wecode_bootcamp/">wecode_bootcamp</a></dt>
                <dd>Wecode |  위코드</dd>
              </dl>
            </div>
            <div className="sectionStory">
              <div className="sectionStory_title">
                <em>스토리</em>
                <a href="">모두 보기</a>
              </div>
              <ul className="sectionStory_list">
                <li>
                    <a href="#">
                      <div className="sectionStory_border">
                        <div className="sectionStory_image">
                          <img src={profile4} alt="프로필 이미지"/>
                        </div>
                      </div>
                      <div className="sectionStory_text">
                        <p>_yum_s</p>
                        <span>16분 전</span>
                      </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <div className="sectionStory_border">
                        <div className="sectionStory_image">
                          <img src={profile5} alt="프로필 이미지"/>
                        </div>
                      </div>
                      <div className="sectionStory_text">
                        <p>drink_eat_drink</p>
                        <span>3시간 전</span>
                      </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <div className="sectionStory_border">
                        <div className="sectionStory_image">
                          <img src={profile6} alt="프로필 이미지"/>
                        </div>
                      </div>
                      <div className="sectionStory_text">
                        <p>hyukyc</p>
                        <span>20시간 전</span>
                      </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <div className="sectionStory_border">
                        <div className="sectionStory_image">
                          <img src={profile7} alt="프로필 이미지"/>
                        </div>
                      </div>
                      <div className="sectionStory_text">
                        <p>jminkeek</p>
                        <span>22시간 전</span>
                      </div>
                    </a>
                </li>
              </ul>
            </div>
            <div className="sectionRecomm">
              <div className="sectionRecomm_title">
                <em>회원님을 위한 추천</em>
                <a href="">모두 보기</a>
              </div>
              <ul className="sectionRecomm_list">
                <li>
                  <a href="">
                    <div className="sectionRecomm_image">
                        <img src={profile8} alt="프로필 이미지"/>
                    </div>
                    <p className="sectionRecomm_text">
                      <em>joaaaaaaaahye</em>
                      <span>_leqend_a님 2명이 팔로우하였습니다.</span>
                    </p>
                  </a>
                  <button className="sectionRecomm_button" type="button" name="button">팔로우</button>
                </li>
                <li>
                  <a href="">
                    <div className="sectionRecomm_image">
                        <img src={profile9}alt="프로필 이미지"/>
                    </div>
                    <p className="sectionRecomm_text">
                      <em>joaaaaaaaahye</em>
                      <span>_leqend_a님 2명이 팔로우하였습니다.</span>
                    </p>
                  </a>
                  <button className="sectionRecomm_button" type="button" name="button">팔로우</button>
                </li>
                <li>
                  <a href="">
                    <div className="sectionRecomm_image">
                        <img src={profile10} alt="프로필 이미지"/>
                    </div>
                    <p className="sectionRecomm_text">
                      <em>joaaaaaaaahye</em>
                      <span>_leqend_a님 2명이 팔로우하였습니다.</span>
                    </p>
                  </a>
                  <button className="sectionRecomm_button" type="button" name="button">팔로우</button>
                </li>
              </ul>

            </div>
            <div className="sectionFooter_Menu">
              <ul>
                <li><a href="#">instagram 정보</a></li>
                <li><a href="#">지원</a></li>
                <li><a href="#">홍보 센터</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">채용 정보</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">약관</a></li>
                <li><a href="#">디렉터리</a></li>
                <li><a href="#">프로필</a></li>
                <li><a href="#">해시테그</a></li>
                <li><a href="#">언어</a></li>
              </ul>
              <p>© 2020 INSTAGRAM</p>
            </div>

          </div>
          {/*<!--//sectionRight-->*/}
        </div>
        {/*<!--//section-->*/}
      </div>      
    )
  }
}

export default Main;