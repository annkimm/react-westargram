import React, { Component } from 'react';
import './FeedItem.css'
import ReplyInput from '../components/ReplyInput';
import profile from '../images/profile.jpg';
import content1 from '../images/content1.jpg'

const ReplyItem = ({listItem}) => (

    listItem.map((list,idx) => (

    <li key={idx}>
        <a href="">{list.id}</a>
        <p onRemove={FeedItem.onRemove}>{list.messege}</p>
        <button className="sectionReply_heart">하트</button>
    </li>
    ))
);

class FeedItem extends Component {

    state= {
        items:[],
    }

    ReplyAdd = (list) => {

        let num = 0;

        this.setState({
            items:this.state.items.concat({
                id:"wecode",
                messege: list,
                idx: this.state.items.length    
            })
        })
    }

    onRemove = (e) => {
        console.log(e);
    }

    render(){

        return(
            <div className="sectionFeed">
              <div className="sectionProfile">

                    <dl className="sectionProfile_wrap">
                        <dt className="sectionProfile_thumnail"><a href=""><img src={profile} alt="프로필 사진"/></a></dt>
                        <dd className="sectionProfile_id"><a href="">corgibh</a></dd>
                    </dl>
                    <button className="sectionProfile_button">…</button>
                </div>
                <div className="sectionPicture">
                    <img src={content1} alt="컨텐츠"/>
                </div>
                <div className="sectionIcon">
                    <ul className="sectionIcon_list">
                    <li><button>좋아요</button></li>
                    <li><button>댓글달기</button></li>
                    <li><button>공유하기</button></li>
                    </ul>
                    <p className="sectionIcon_bookMark"><button>책갈피</button></p>
                </div>
                <div className="sectionLike">
                    <p>
                    <span>프로필 이미지</span>
                    <em>ari_the_corgi</em>님
                    <em>외 10명</em>이 좋아합니다.
                    </p>
                </div>
                <div className="sectionText">
                    <a href="">corgibh</a>
                    <p>호랑이는 백호가 산책 다녀오기만 하면 저렇게 끌어안는...</p>
                    <button className="sectionText_button">더 보기</button>
                </div>
                <div className="sectionReply">
                    {/*<a href="">댓글 더보기</a>*/}
                    <ul className="sectionReply_list">
                    <li>
                        <a href="">neceosecius</a>
                        <p>우리 백호 졸귀!</p>
                        <button className="sectionReply_heart">하트</button>
                    </li>
                    <ReplyItem onRemove={this.onRemove} listItem={this.state.items} />
                    </ul>
                    <span className="sectionTime">42분 전</span>
                </div>
                <ReplyInput onKeyPress={this.ReplyAdd} />
            </div>                
        )
    }
}

export default FeedItem;