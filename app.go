package main

import (
	log "github.com/Sirupsen/logrus"
	"github.com/gorilla/mux"
	"html/template"
	"net/http"
	"fmt"
)

var templates = template.Must(template.ParseFiles("templates/index.html"))

func index(w http.ResponseWriter, r *http.Request) {
	err := templates.ExecuteTemplate(w, "index.html", "")
	if err != nil {
		panic(err)
	}
}

var i = 0

func counter(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "{\"counter\":%d}", i);
	i += 1
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", index)
	r.HandleFunc("/counter", counter)
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("assets/"))))

	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
