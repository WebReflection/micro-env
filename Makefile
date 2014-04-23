.PHONY: build each test

REPO = micro-env

build:
	make each
	make test
	cat build/Array/indexOf.js build/Function/bind.js build/Object/*.js > build/base.js
	cat build/Function/bind.js build/DOM/*.js > build/dom.js
	cat build/Array/indexOf.js build/Function/*.js build/Object/*.js > build/oop.js
	cat build/Array/*.js build/Function/*.js build/Object/*.js > build/env.js
	cat build/Array/*.js build/Function/*.js build/Object/*.js build/DOM/*.js > build/all.js
	echo "";\
	echo "    gzip    plain";\
	for f in base dom oop env all;\
	do\
	  echo "`gzip -c build/$$f.js | wc -c` `cat build/$$f.js | wc -c` build/$$f.js";\
	done;\
	echo ""

each:  
	echo "";\
	for d in `ls src`;\
	do\
	  echo "         $$d";\
	  cd ./src/$$d;\
	  rm -rf ../../build/$$d/*;\
	  echo "    gzip    plain";\
	  for f in `ls *.js`;\
	  do\
	    node ../../node_modules/uglify-js/bin/uglifyjs -nc $$f >../../build/$$d/$$f;\
	    echo "`gzip -c ../../build/$$d/$$f | wc -c` `cat ../../build/$$d/$$f | wc -c` $$d/$$f";\
	  done;\
	  echo "";\
	  cd ../../;\
	done

test:
	npm test

pages:
	git pull --rebase
	mkdir -p ~/tmp
	mkdir -p ~/tmp/$(REPO)
	cp -rf src ~/tmp/$(REPO)
	cp -rf build ~/tmp/$(REPO)
	cp -rf test ~/tmp/$(REPO)
	cp index.html ~/tmp/$(REPO)
	git checkout gh-pages
	mkdir -p test
	rm -rf test
	cp -rf ~/tmp/$(REPO) test
	git add test
	git add test/.
	git commit -m 'automatic test generator'
	git push
	git checkout master
	rm -r ~/tmp/$(REPO)