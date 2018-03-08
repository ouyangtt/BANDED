USE banded_db;

INSERT INTO genres(genre_name) VALUES ("Punk Rock");
INSERT INTO genres(genre_name) VALUES ("Rock");
INSERT INTO genres(genre_name) VALUES ("Metal");
INSERT INTO genres(genre_name) VALUES ("Folk");
INSERT INTO genres(genre_name) VALUES ("Hip Hop");
INSERT INTO genres(genre_name) VALUES ("Post Punk");
INSERT INTO genres(genre_name) VALUES ("Shoegaze");
INSERT INTO genres(genre_name) VALUES ("Electronic");
INSERT INTO genres(genre_name) VALUES ("Jazz");
INSERT INTO genres(genre_name) VALUES ("Country");
INSERT INTO genres(genre_name) VALUES ("Alternative");
INSERT INTO genres(genre_name) VALUES ("Indie Rock");
INSERT INTO genres(genre_name) VALUES ("Lo-fi");
INSERT INTO genres(genre_name) VALUES ("Prog Rock");
INSERT INTO genres(genre_name) VALUES ("R&B");
INSERT INTO genres(genre_name) VALUES ("Blues");
INSERT INTO genres(genre_name) VALUES ("Outlaw Country");
INSERT INTO genres(genre_name) VALUES ("Industrial");
INSERT INTO genres(genre_name) VALUES ("Hardcore");
INSERT INTO genres(genre_name) VALUES ("Psychedelic Rock");
INSERT INTO genres(genre_name) VALUES ("Acid Jazz");

INSERT INTO login(auth_id,is_band,u_id) VALUES ("789af8uasf07gfa",1,2);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("789dfguasf07gfa",0,1);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("789af887dfs7dgf",0,3);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("789afpoi90ruiui",1,4);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("7gfd76ddsf07gfa",0,5);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("9p7jh8uasf07gfa",1,9);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("76dds8uasf07gfa",1,3);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("789af8uasf76dds",0,2);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("78976ddssf07gfa",1,10);
INSERT INTO login(auth_id,is_band,u_id) VALUES ("789897f79vc7gfa",0,6);



INSERT INTO fans(fan_name, email, fan_pic_url, f_locale, b_id) VALUES ("Victor Li", "thebrandnewvictor@gmail.com", "/assets/images/victor.png", 94580, 10);
INSERT INTO fans(fan_name, email, fan_pic_url, f_locale, b_id) VALUES ("Mark Mikelonis", "thebrandnewvictor@gmail.com", "/assets/images/victor.png", 94580, 7);
INSERT INTO fans(fan_name, email, fan_pic_url, f_locale, b_id) VALUES ("Adam Kahane", "thebrandnewvictor@gmail.com", "/assets/images/victor.png", 94580, 4);
INSERT INTO fans(fan_name, email, fan_pic_url, f_locale, b_id) VALUES ("Tung Tung Ouyang", "thebrandnewvictor@gmail.com", "/assets/images/victor.png", 94580, 2);


INSERT INTO music_genres(g_id,b_id) VALUES (6,10);
INSERT INTO music_genres(g_id,b_id) VALUES (7,8);
INSERT INTO music_genres(g_id,b_id) VALUES (5,1);
INSERT INTO music_genres(g_id,b_id) VALUES (4,9);
INSERT INTO music_genres(g_id,b_id) VALUES (1,6);

INSERT INTO music_genres(g_id,f_id) VALUES (1,5);
INSERT INTO music_genres(g_id,f_id) VALUES (5,5);
INSERT INTO music_genres(g_id,f_id) VALUES (3,6);
INSERT INTO music_genres(g_id,f_id) VALUES (2,1);
INSERT INTO music_genres(g_id,f_id) VALUES (11,4);


INSERT INTO events(e_name,e_time,band_id) VALUES ("New song played in studio", "2018-04-12 20:00:00", 10);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Open studio practice", "2018-05-10 20:00:00", 5);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Surprise for our devoted fans", "2018-05-02 20:00:00", 2);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Back from tour open studio", "2018-04-10 20:00:00", 3);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Open practice new material", "2018-04-15 20:00:00", 4);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Jam session", "2018-04-13 20:00:00", 6);
INSERT INTO events(e_name,e_time,band_id) VALUES ("Experience a song in the making", "2018-04-02 20:00:00", 7);


INSERT INTO soc_media(sm_name, sm_url, b_id) VALUES ("facebook", "https://www.facebook.com/", 10);
INSERT INTO soc_media(sm_name, sm_url, b_id) VALUES ("twitter", "https://twitter.com/", 5);
INSERT INTO soc_media(sm_name, sm_url, b_id) VALUES ("instagram", "https://www.instagram.com/", 8);
INSERT INTO soc_media(sm_name, sm_url, b_id) VALUES ("snapchat", "https://www.snapchat.com/", 3);
INSERT INTO soc_media(sm_name, sm_url, b_id) VALUES ("youtube", "https://www.youtube.com/", 4);



INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Rival Schools","1", "thedude@gmail.com","/assets/images/Ghost.jpg","Rival Schools are a post-hardcore band from New York City.","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001,'1970-01-01 00:00:01.000000','1970-01-01 00:00:01.000000');
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Ghost","thedude@gmail.com","4","jiou24ur""/assets/images/Ghost.jpg","Ghost is a Swedish heavy metal band that was formed in Linköping, Sweden in 2006. ","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Turbonegro","thedude@gmail.com","3","/assets/images/Ghost.jpg","Turbonegro is a Norwegian punk rock band, initially active from 1989 to 1998, then reformed in 2002. ","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",94602);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Hot Snakes","thedude@gmail.com","5","/assets/images/Ghost.jpg","Hot Snakes are an American post-hardcore band led by Rick Froberg and John Reis.","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",94607);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Days N' Daze","thedude@gmail.com","9","/assets/images/Ghost.jpg","Days N' Daze is a band from Houston performing a type of folk punk they have called 'H-Town Thrashgrass'","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",94611);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Captain We're Sinking","thedude@gmail.com","/assets/images/Ghost.jpg","Captain, We're Sinking was an American punk band from Scranton, Pennsylvania. ","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",94606);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Cloud Nothings","thedude@gmail.com","/assets/images/Ghost.jpg","Cloud Nothings is an American indie rock band from Cleveland, Ohio, founded by singer-songwriter Dylan Baldi.","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Rocket From The Crypt","thedude@gmail.com","/assets/images/Ghost.jpg","Rocket from the Crypt is an American rock band from San Diego, California, originally active from 1989 to 2005.","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("Harley Poe","thedude@gmail.com","/assets/images/Ghost.jpg","It's not enough to say Harley Poe write songs about monsters. Harley Poe sing about being monsters.","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001);
INSERT INTO bands(name,auth_id,email,pic_url,bio,twitter,facebook,instagram,bandcamp,locale,createdAt,updatedAt) VALUES ("NoMeansNo","thedude@gmail.com","/assets/images/Ghost.jpg","NoMeansNo was a Canadian punk rock band formed in Victoria, British Columbia and later relocated to Vancouver. ","https://twitter.com/","https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/",10001);
