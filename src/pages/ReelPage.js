import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Modal from "../components/Modal";

const ReelPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState(""); // 25 minutes
  const [timer, setTimer] = useState(5); // 25 minutes
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef(); // <-- React ref

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      tick.current = setInterval(() => {
        // <-- set tick ref current value
        setTimer((timer) => {
          if (timer > 0) {
            return timer - 1;
          }
          setTimer(0);
          setStart(false);
          setIsOpen(true);
        });
      }, 1000);
    } else {
      clearInterval(tick.current); // <-- access tick ref current value
    }

    return () => clearInterval(tick.current); // <-- clear on unmount!
  }, [start]);
  
  const fetchReelData = async () =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
      }
    };
    await fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/reel/?shortcode=CSPMBaOoL15',options).then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    // fetchReelData();
    
    console.log(process.env.REACT_APP_API_KEY);
  },[]);

  const handleSubmit = (e) => {
    console.log("ek");
    e.preventDefault();
    startCounter();
  };

  const startCounter = () => {
    setTimer(5);
    setStart(true);
  };


  const reelData = {
    "__typename": "GraphVideo",
    "id": "2634377180475342201",
    "shortcode": "CSPMBaOoL15",
    "dimensions": {
        "height": 1566,
        "width": 750
    },
    "gating_info": null,
    "fact_check_overall_rating": null,
    "fact_check_information": null,
    "sensitivity_friction_info": null,
    "sharing_friction_info": {
        "should_have_sharing_friction": false,
        "bloks_app_url": null
    },
    "media_overlay_info": null,
    "media_preview": "ABQqrf2VF/eb9P8ACnf2TF/eb9P8K08U4CtbIky/7Ii/vN+n+FFauKKLIB+2nBaozakkXAUlvfgZ/r36ULqYIwVOec4/+v19xU8yCxf20VgSatNn5RjHXjvk0UuYdixObadtzuM4A4I/Sp4rq3iGMxtjoScmuUorFRtpcq50plt2OSUGfRiBRXNUU+XzHc//2Q==",
    "display_url": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-15/232332503_197683115664208_2916752855325349644_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=evGLLMNA-H4AX_SJSor&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT_X3irqs1lQ9b8Lp_Wqyg2WAen3suWqjGoq8Cs0hzaiXg&oe=634856BC&_nc_sid=4f375e",
    "display_resources": [
        {
            "src": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-15/232332503_197683115664208_2916752855325349644_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=evGLLMNA-H4AX_SJSor&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT-vjEVylq7A0bJrcY2siHkI7sc3iXeOU4g6fsFPeMf2MA&oe=634D9CBC&_nc_sid=4f375e",
            "config_width": 640,
            "config_height": 1336
        },
        {
            "src": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-15/232332503_197683115664208_2916752855325349644_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=evGLLMNA-H4AX_SJSor&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT-5s-YXLTbSWDcZ3jOHOlgcC6T77OjgdMKKCm5hNpFSKg&oe=634D9CBC&_nc_sid=4f375e",
            "config_width": 750,
            "config_height": 1566
        },
        {
            "src": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-15/232332503_197683115664208_2916752855325349644_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=evGLLMNA-H4AX_SJSor&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT-5s-YXLTbSWDcZ3jOHOlgcC6T77OjgdMKKCm5hNpFSKg&oe=634D9CBC&_nc_sid=4f375e",
            "config_width": 1080,
            "config_height": 2256
        }
    ],
    "accessibility_caption": null,
    "dash_info": {
        "is_dash_eligible": true,
        "video_dash_manifest": "<MPD xmlns=\"urn:mpeg:dash:schema:mpd:2011\" minBufferTime=\"PT1.500S\" type=\"static\" mediaPresentationDuration=\"PT0H0M10.449S\" maxSegmentDuration=\"PT0H0M5.000S\" profiles=\"urn:mpeg:dash:profile:isoff-on-demand:2011,http://dashif.org/guidelines/dash264\">\n <Period duration=\"PT0H0M10.449S\">\n  <AdaptationSet segmentAlignment=\"true\" maxWidth=\"580\" maxHeight=\"1208\" maxFrameRate=\"30\" par=\"580:1208\" lang=\"und\" subsegmentAlignment=\"true\" subsegmentStartsWithSAP=\"1\">\n   <Representation id=\"1024744651397470vd\" mimeType=\"video/mp4\" codecs=\"avc1.4D401F\" width=\"580\" height=\"1208\" frameRate=\"30\" sar=\"1:1\" startWithSAP=\"1\" bandwidth=\"802113\" FBQualityClass=\"sd\" FBQualityLabel=\"580w\" FBPlaybackResolutionMos=\"0:100.00,360:91.87,480:88.65,720:67.63\">\n    <BaseURL urlExpiration=\"1665694758\">https://instagram.fkiv7-1.fna.fbcdn.net/v/t50.2886-16/233178942_581727562828790_1237865564048295774_n.mp4?_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&amp;_nc_cat=102&amp;_nc_ohc=wGxc10s8fW0AX-hmR6p&amp;edm=AP_V10EBAAAA&amp;ccb=7-5&amp;oh=00_AT8Xi3VFII5Tzy1i8-OZcRyRMGcsXOwAWZTGw7XxKDYHUw&amp;oe=63487C26&amp;_nc_sid=4f375e</BaseURL>\n    <SegmentBase indexRangeExact=\"true\" indexRange=\"842-921\" FBFirstSegmentRange=\"922-229614\" FBSecondSegmentRange=\"229615-410117\" FBPrefetchSegmentRange=\"922-410117\">\n      <Initialization range=\"0-841\"/>\n    </SegmentBase>\n   </Representation>\n  </AdaptationSet>\n <AdaptationSet segmentAlignment=\"true\" lang=\"und\" subsegmentAlignment=\"true\" subsegmentStartsWithSAP=\"1\">\n   <Representation id=\"151146960480084ad\" mimeType=\"audio/mp4\" codecs=\"mp4a.40.5\" audioSamplingRate=\"44100\" startWithSAP=\"1\" bandwidth=\"4325\">\n    <AudioChannelConfiguration schemeIdUri=\"urn:mpeg:dash:23003:3:audio_channel_configuration:2011\" value=\"1\"/>\n    <BaseURL urlExpiration=\"1665677935\">https://instagram.fkiv7-1.fna.fbcdn.net/v/t50.2886-16/233141236_525429498724187_8238459598908666728_n.mp4?_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=OFnVEm-eLpkAX9kmK8V&amp;edm=AP_V10EBAAAA&amp;ccb=7-5&amp;oh=00_AT9xifUBm_0UzQ6JdrYLfKWkoyjEQ3aN76u-XEk7l6YgYA&amp;oe=63483A6F&amp;_nc_sid=4f375e</BaseURL>\n    <SegmentBase indexRangeExact=\"true\" indexRange=\"783-886\" FBFirstSegmentRange=\"887-1761\" FBSecondSegmentRange=\"1762-2632\" FBPrefetchSegmentRange=\"887-2632\">\n      <Initialization range=\"0-782\"/>\n    </SegmentBase>\n   </Representation>\n  </AdaptationSet>\n </Period>\n</MPD>",
        "number_of_qualities": 1
    },
    "has_audio": true,
    "video_url": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t50.2886-16/231960503_187997033321878_4066777937706415186_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5kZWZhdWx0In0&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ABZwOzT6M-0AX_zh6F5&edm=AP_V10EBAAAA&vs=18122674438216271_4284437652&_nc_vs=HBksFQAYJEdMZHYwdzJXMVdONF82b0FBRkwwWXRYOEdIQTRicV9FQUFBRhUAAsgBABUAGCRHSThRLWcwQ09xZnBUM01BQUUza1o0bjhUT3hmYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAm3uHBmpCQ0EAVAigCQzMsF0Ak3bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&_nc_rid=fdcef8f4be&ccb=7-5&oe=63487062&oh=00_AT9aGwbZ5Zkukl_DMUZ6v9JCnGWHpoFTWldUgzn0HNl6CQ&_nc_sid=4f375e",
    "video_view_count": 190,
    "video_play_count": 465,
    "is_video": true,
    "tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZmRjZWZiOWYzMWViNDVmNDk5YTZlYTQyM2FjMDljYTcyNjM0Mzc3MTgwNDc1MzQyMjAxIiwic2VydmVyX3Rva2VuIjoiMTY2NTUyNDMwMTcxM3wyNjM0Mzc3MTgwNDc1MzQyMjAxfDU1NTIwNjQxOTAyfGQwZWQ2NGI4NmVhZjA3N2ExYmZkNjA0MzUyYTJlYWNhNmM3ZDcyNTJkOTI3ZGI3OGVmYmViMDA2MmQwNDBhZjIifSwic2lnbmF0dXJlIjoiIn0=",
    "upcoming_event": null,
    "edge_media_to_tagged_user": {
        "edges": []
    },
    "edge_media_to_caption": {
        "edges": [
            {
                "node": {
                    "text": "First Reel 😉 ❤️\n#timelapse"
                }
            }
        ]
    },
    "can_see_insights_as_brand": false,
    "caption_is_edited": true,
    "has_ranked_comments": false,
    "like_and_view_counts_disabled": false,
    "edge_media_to_comment": {
        "count": 0,
        "page_info": {
            "has_next_page": false,
            "end_cursor": null
        },
        "edges": []
    },
    "comments_disabled": false,
    "commenting_disabled_for_viewer": false,
    "taken_at_timestamp": 1628262327,
    "edge_media_preview_like": {
        "count": 19,
        "edges": []
    },
    "edge_media_to_sponsor_user": {
        "edges": []
    },
    "is_affiliate": false,
    "is_paid_partnership": false,
    "location": null,
    "viewer_has_liked": false,
    "viewer_has_saved": false,
    "viewer_has_saved_to_collection": false,
    "viewer_in_photo_of_you": false,
    "viewer_can_reshare": true,
    "owner": {
        "id": "4135968397",
        "is_verified": false,
        "profile_pic_url": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-19/296085612_626085812031153_9136051107950728544_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=NpIxU0r3RCAAX9wTZYs&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT_51Del2nQ-aH1Cr8YyIiPKESFcQMm5OCCpthA8hsTHaQ&oe=634D0454&_nc_sid=4f375e",
        "username": "cinex10",
        "blocked_by_viewer": false,
        "restricted_by_viewer": false,
        "followed_by_viewer": false,
        "full_name": "Yacine Dr.",
        "has_blocked_viewer": false,
        "is_embeds_disabled": false,
        "is_private": false,
        "is_unpublished": false,
        "requested_by_viewer": false,
        "pass_tiering_recommendation": false,
        "edge_owner_to_timeline_media": {
            "count": 18
        },
        "edge_followed_by": {
            "count": 93
        }
    },
    "is_ad": false,
    "edge_web_media_to_related_media": {
        "edges": []
    },
    "coauthor_producers": [],
    "encoding_status": null,
    "is_published": true,
    "product_type": "clips",
    "title": "",
    "video_duration": 10.433,
    "thumbnail_src": "https://instagram.fkiv7-1.fna.fbcdn.net/v/t51.2885-15/232332503_197683115664208_2916752855325349644_n.jpg?stp=c0.392.720.720a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fkiv7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=evGLLMNA-H4AX_SJSor&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT-T38dSoDwGFSCWbL8S78o5m4ZJp1_oAy7VTLhTIMPhkw&oe=634856BC&_nc_sid=4f375e",
    "clips_music_attribution_info": {
        "artist_name": "cinex10",
        "song_name": "Original audio",
        "uses_original_audio": true,
        "should_mute_audio": false,
        "should_mute_audio_reason": "",
        "audio_id": "1162070824298352"
    },
    "edge_related_profiles": {
        "edges": []
    },
    "unrelated_data": {
        "retry": -1,
        "id_acc": "282827",
        "proxy_info": "MOL 2",
        "time_gen": 2.36
    }
};

  return (
    <div className="center">
      <h1>Downlaod Reel</h1>
      <h4>subtitle downlaod Reel</h4>
      <form onSubmit={handleSubmit}>
        <div className="link-box">
          <input
            type="text"
            required
            value={link}
            onChange={
              
              (e) => setLink(e.target.value)}
          />
        </div>
        <p>{link}</p>
        <button>Get</button>
      </form>
      <div style={{ width: 200, height: 200 }}>
        {start && (
          <CircularProgressbar
            value={timer*20}
            text={`${timer*20}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "16px",

              // How long animation takes to go from one timer to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `rgba(62, 152, 199, ${timer*20 / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        )}
        {isOpen &&    <div className="App">
       
      {isOpen && <Modal setIsOpen={setIsOpen} data={reelData} />}
    </div> }
      </div>
    </div>
  );
};

export default ReelPage;
