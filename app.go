package main

import (
	log "github.com/Sirupsen/logrus"
	"github.com/gorilla/mux"
	"html/template"
	"net/http"
)

var templates = template.Must(template.ParseFiles("templates/index.html"))

func hello(w http.ResponseWriter, r *http.Request) {
	//	r.ParseForm()
	//	fmt.Println(r.Form)
	//	fmt.Println(r.URL)
	//	for k, v := range r.Form {
	//		fmt.Println("key:", k)
	//		fmt.Println("val:", strings.Join(v, ","))
	//	}
	
    err := templates.ExecuteTemplate(w, "index.html", "")
	if err != nil {
		panic(err)
	}
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", hello)
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("assets/")))) 

	fmt.Println("Listening on port 8080")

	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
