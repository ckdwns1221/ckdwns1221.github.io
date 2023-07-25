const items = [{
            "id": 1,
            "department": "동아리연합회 부스",
            "menus": [
                { "name": "바나나 브륄레 + 아이스크림", "price": "2,000원" },
                { "name": "바나나 브륄레", "price": "1,500원" }
            ]
        },
        {
            "id": 2,
            "department": "블루인 부스",
            "menus": [
                { "name": "떡볶이", "price": "2,000원" },
                { "name": "약과 아이스크림", "price": "3,000원" },
                { "name": "떡볶이 + 약과 아이스크림", "price": "5,000원" }
            ]
        },
        {
            "id": 3,
            "department": "대의원회 부스",
            "menus": [
                { "name": "화채", "price": "3,500원" },
                { "name": "미숫가루", "price": "1,500원" },
                { "name": "냉커피", "price": "1,000원" },
                { "name": "캔 음료 S", "price": "1,000원" },
                { "name": "캔 음료 M", "price": "1,500원" },
                { "name": "캔 음료 L", "price": "2,000원" },
            ]
        },
    ]

fetch('Menu.json')
    .then(function(response){
        if(!response.ok) {
            throw new Error('에러에러에러');
        }
        return response.json();
    })
    .then(function(items){
            items.forEach(function(item) {
                const menusToShow = item.menus.slice(0,2); 
            
                const template = `
                        <button>
                            <div class="booth d-flex">
                                <div><img class="boothimg" src="./gardenImg/booth.png" alt=""></div>
                                <div class="boothinfo d-flex flex-column justify-content-center text-start">
                                    <p class="boothtitle mb-1">${item.department}</p>
                                    <p class="boothsub mb-0">${menusToShow  .map(menu => `<span>${menu.name}</span><br/>`).join('')}</p>
                                </div>
                            </div>
                        </button>
                `;
                $(".boothSection").append(template);
            
            }) 
        })
    .catch(function(errpr){
        console.log(error);
    });


