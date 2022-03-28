const form=document.querySelector('#searchForm');
const result=document.querySelector('#table-res');
const cont=document.getElementById('content')

form.addEventListener('submit',(e)=>{
e.preventDefault();
const ctype=form.elements.coinType.value;
cont.classList.add('mainclick');
cont.classList.remove('main');
fetchPrice(ctype);
});

const fetchPrice=async(ctype)=>{
    const r=await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    const price=r.data.coin.price;
    const sym=r.data.coin.symbol;
    const rank=r.data.coin.rank;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const base=r.data.coin.name;
    const pricebtc=r.data.coin.priceBtc
    const target='USD';
    var col= "green";
    if(change<0)
    { 
        col= "red";
    }
    result.innerHTML=` <tr style="background-color:orange; font-weight:700; font-size:25px; font-family:'Times New Roman', Times, serif;">
    <td>Property</td><td>Value</td>
</tr>
<tr class="data">
 <td style="color:${col};font-weight:600;">${base}</td><td style="color:${col};font-weight:600;"><span style="font-size: 1.3em; ">${price}</span> ${target}</td>
</tr>
<tr class="data">
 <td>Symbol</td><td>${sym}</td>
</tr>
<tr class="data">
 <td>Volume</td><td>${volume}</td>
</tr>
<tr class="data">
<td>Rank</td><td>${rank}</td>
</tr>
<tr class="data">
 <td style="color:${col};font-weight:600;">%Change (24hrs)</td ><td style="color:${col};font-weight:600;"><span style="font-size: 1.3em;">${change}</span></td>
</tr>
<tr class="data">
 <td>Price BTC</td><td>${pricebtc}</td>
</tr>`
}
