package main

import (
	"fmt"
	log "github.com/Sirupsen/logrus"
	"github.com/gorilla/mux"
	"html/template"
	"net/http"
	"strings"
)

func hello(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("templates/index.html")
    _ = t.ExecuteTemplate(w, "index.html", "")
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", hello)
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
