# classifier

1- restful api lets user classify text in both langauges english and arabic.
2- the classes to classify are non-static, user may add or delete class.
3- user can train each class using text or even a text file.

1- trainlink ->>> https://immense-dusk-88449.herokuapp.com/model/train-single
	{
		header auth = "ais2jas3cdcas8fvrfndf5s"
		text=your text to train
		category=category name
		/*category name must be pre-defined one or a new one
		*
		*english categories ->>> {art - celep - fashion - politics - social media
		 - sports - technology}
		*
		*arabic categories ->>> {اجتماعى - السياسة وشئون الدولة - رياضة - فن}
		*/
	}
  
2- classifylink ->> https://immense-dusk-88449.herokuapp.com/classify
	{
		header auth = "ais2jas3cdcas8fvrfndf5s"
		text=your text to classify
	}

3- output for classify repo with input "liga a"
    {
        "art.txt": 0.01,
        "celep.txt": 0.01,
        "fashion.txt": 0.01,
        "politics.txt": 0.01,
        "social media.txt": 0.01,
        "sports.txt": 0.9433962264150942,
        "technology.txt": 0.01
    }

4- output for classify repo with input "الدوري المصري"
    {
        "اجتماعي": 0.01,
        "السياسة و شئون الدولة": 0.29304506381870277,
        "رياضة": 0.5209690023443605,
        "فن": 0.18233915082052615
    }


/*WARNING*/ --> text must be english or arabic no mixed language is allowed 
/*output for mixed language*/ --> illegal mixed languages

