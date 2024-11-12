const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark-all");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((mesaage) => {
    mesaage.addEventListener('click', () => {
        mesaage.classList.remove("unread");
        const newUnreadMessage = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessage.length;
    })

});


markAll.addEventListener('click', () => {
    unReadMessages.forEach((mesaage) => {
        mesaage.classList.remove("unread")
    })
    const newUnreadMessage = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessage.length;
});