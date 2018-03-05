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

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Rival Schools","/assets/images/Ghost.jpg","Rival Schools are a post-hardcore band from New York City.",10001);
INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Ghost","/assets/images/Ghost.jpg","Ghost is a Swedish heavy metal band that was formed in Linköping, Sweden in 2006. ",10001);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Turbonegro","/assets/images/Ghost.jpg","Turbonegro is a Norwegian punk rock band, initially active from 1989 to 1998, then reformed in 2002. ",94602);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Hot Snakes","/assets/images/Ghost.jpg","Hot Snakes are an American post-hardcore band led by Rick Froberg and John Reis.",94607);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Days N' Daze","/assets/images/Ghost.jpg","Days N' Daze is a band from Houston performing a type of folk punk they have called 'H-Town Thrashgrass'",94611);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Captain We're Sinking","/assets/images/Ghost.jpg","Captain, We're Sinking was an American punk band from Scranton, Pennsylvania. ",94606);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Cloud Nothings","/assets/images/Ghost.jpg","Cloud Nothings is an American indie rock band from Cleveland, Ohio, founded by singer-songwriter Dylan Baldi.",10001);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Rocket From The Crypt","/assets/images/Ghost.jpg","Rocket from the Crypt is an American rock band from San Diego, California, originally active from 1989 to 2005.",10001);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("Harley Poe","/assets/images/Ghost.jpg","It's not enough to say Harley Poe write songs about monsters. Harley Poe sing about being monsters.",10001);

INSERT INTO bands(band_name,band_pic_url,bio,b_locale) VALUES ("NoMeansNo","/assets/images/Ghost.jpg","NoMeansNo was a Canadian punk rock band formed in Victoria, British Columbia and later relocated to Vancouver. ",10001);

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

INSERT INTO music_genres(g_id,b_id) VALUES (6,10);
INSERT INTO music_genres(g_id,b_id) VALUES (7,8);
INSERT INTO music_genres(g_id,b_id) VALUES (5,1);
INSERT INTO music_genres(g_id,b_id) VALUES (4,9);
INSERT INTO music_genres(g_id,b_id) VALUES (1,6);

-- these won't work until we have friends in the database

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
;
