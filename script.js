function moChucNang(idPhanHe) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById(idPhanHe).classList.remove('hidden');
}

function quayLaiMenu() {
    document.getElementById('vong-quay-section').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}

function quaySoNgauNhien() {
    const text = document.getElementById('student-list').value;
    const danhSach = text.split('\n').map(name => name.trim()).filter(name => name !== "");

    if (danhSach.length === 0) {
        alert("Vui lòng nhập danh sách tên học sinh trước khi quay!");
        return;
    }

    const btnSpin = document.getElementById('btn-spin');
    const displayName = document.getElementById('display-name');
    
    btnSpin.disabled = true;
    let lanChay = 0;
    
    const danhSachChay = setInterval(() => {
        const viTriNgauNhien = Math.floor(Math.random() * danhSach.length);
        displayName.innerText = danhSach[viTriNgauNhien];
        lanChay++;
        
        if (lanChay > 20) {
            clearInterval(danhSachChay);
            btnSpin.disabled = false;
            
            const ketQuaCuoi = Math.floor(Math.random() * danhSach.length);
            displayName.innerText = "🎉 " + danhSach[ketQuaCuoi] + " 🎉";
        }
    }, 100);
}