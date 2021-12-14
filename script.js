const buttons = Array.from(document.querySelectorAll('.btn')),
kaleContainer = document.querySelector('.kaleidoscope'),
kaleTilesTexture = Array.from(document.querySelectorAll('.texture')),
angleValue = 10

let angle = 0

buttons.forEach(btn => btn.addEventListener('click', (e) => {
    angle += (e.target.dataset.id === 'right' ? angleValue : -angleValue)
    console.log(angle)
    kaleContainer.style.transform = 'rotate(' + angle +'deg)'
    kaleTilesTexture.forEach(tile => {
        let pos = e.target.dataset.direction
        tile.style.transform = 'rotate(' + angle +'deg)'
    })
}
))
