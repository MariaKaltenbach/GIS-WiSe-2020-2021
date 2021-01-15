namespace Test {
    document
        .getElementById("selectElement")
        .addEventListener("click", async () => {
            let response: Response = await fetch(
                "https://mongodbnetbrowser.herokuapp.com/?u=UserTest&p=usertest123&a=mariakltb.sfhfn.mongodb.net&n=Test&c=Students");

            console.log("Response", await response.text());

        });

}