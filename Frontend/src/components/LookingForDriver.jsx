import React from 'react'

const LookingForDriver = ({setVehicleFound ,  pickup , destination , fare , vehicleType}) => {
  return (
    <div>
      <h5
        className="absolute top-5 right-5 text-2xl"
        onClick={() => {
            setVehicleFound(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-2">Looking for a Captain</h3>

      <div className="flex justify-between flex-col items-center gap-4">
        <img
          className=" h-25"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUPEA8REhASEBASEBAVFhAVEBUQFREWFhcVFhYYHiggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NGg0NDisZFhkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xAA+EAACAgEBBAcEBwYGAwAAAAAAAQIDEQQFEiExBiJBUWFxgQcTMpEUQlKhscHRM1NykrLhI0NEYqLwFZPx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo2BUFrsXeW++Xf+IHoDz98u/8SvvF3gXgsVsftIuTAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSUkuZU1mrslJNxeH2Z5Y7gMm/WKKzx+Tb9EuLNZftS9/stPLzluw+5s1m0p3yps93c4Wque5iMOE8PHCSeeJDt3SrXS56y/0lufdFICc9LDUT619m4uyuDWfWS/BfMz4QS5L9fmfO66Raxf6zUf+2z9TP0fTjaFb4aqUl3TjCSfq1n7wJ7KkYbC9qnFQ1lKS7bastLxcHl48m/IkfQ6yu6tW02RnXLipReU/wC5UZADnFJuTUUllttJJd7bOX2x090tOY1Z1E12Qwq8+Nj4Y8YpgdO0nzWS33Xc2vLl8mRJtP2ha6zPu1DTx7NyKnPHjOeU/NRRpJ9INRN5nqb5eDts3f5U8fcBPH0iUfi4rv4/euZlVXKXJ8+Xc/JkDaXbNieVbYn3qck/xOj2H0rsql1pOytvMoyeX5xb5P7iKloGu2XtSu6CnCW9F/zRfdJdjNiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWzlhN9yNUmbHVvqP0/E1Nt0YRcpyjGK5yk0orzb5AXXUqXPn2PtI66V+z5ylK7StKUm5SqfCLfa4v6r8OXkSB9KUqnbTu3LdbhuSi4zaXBKXL1PPZ20VdvJ12VzhjfhZFxaznGHykuD5MD5+1mjsqm67YShNc4yWH5rvXijwwfQ21NjUaiG5dVGa7Mrin3p80/FEf7c9mUlmWktyv3Vn5TX5r1AjfJu+jHSW7Q2b9TzBte8pb6k1+UvH8VwMLaeyb9PLdvpnW+xtdV+UlwfozBYH0HpNRpdq6T7UJfFHgrK7F+El8n4pkWdKNg26K3cn1q5ZdVqXVnH8pLtRqOi/SGzRXq6ttxeFbX2Th3ea7H+rJwlHTbT0a+vVbHMZL44TXau6SefvRUQarBLD5r17TK2/sizSXyot5rjCa+GcHykv07GmjXqQF7g1xXFfee2n1fieMZlZwT4rg+/9QOl2Ft6yianCXhKL+GS7n+pK+xduwvqdlScml1qsxU1PHCPHC49j5feQFXa4vDN5sPbVlFisrlhrg19WUe2Ml2oipN6H9Pa9fqbtG9LqNNqNPFyshaoYwpKOMp88tdmMdp2BzfR7Uae+X0+upRusrVNk8dfdi87rf1km+f/AMOjTAqAAAAAAAAAAAAAAAAAAAAAAFAKgoUbA8NoyxW/T+pEF+1CWq2htKrY+leEq1ZPLar3mm3KxpPqqKXfxfeTxYk001lPmiK/okaOlNnPF+y1OvPerIRaXpVIDidkw1vRzW1x1Moz0Gplu2Sg5Sq7E5pNJxsjwfLiuHHsnWM89uV2PsOM9qegjfsnUKSW9VFXwePhlW8vHnFyXqZHs62k79l6WxtuXuVW2+bdUnXl/wAgHWpnlrdZGqt2zzuxw5YTk8NpZwvMtVhepgeFF9Gpg3CVdsHwkuD59kovl5MgX2ra6Gn189Jp9JClVqtuxOf+Ip1xnmMOEYpOTXBP4fQn+miEXJwhGLk05NJJya7XjmYO2Ng6XVY+k6am5xWIynFOaXcpc0vDIHy3RtqxSzPEo9qwk/Q772e9PZaHUVwuhOGi1L60ppqKlwStg+TWeEvDD7CS9T7PtnTjufQqYx3lLqpqWV/uTzjwyb6rY1DqWnnRVKhRUVU4xcFFLCW61jGAKdL+j8Nfp91YVsU5aezsUmvhb+zLgn6PsIOt084zlVKElZCTjKGOspJ4awj6F2do4VVqqrhXFJQh2RiuUV4eB7+78OZUfPlGydTL4dLfLyqta+eDZ6bolr5ctJYv4tyH9TROO4N0CJ9L7OdVP9rKmtfxOU15KKx9502xfZ5pqcSulLUSXZLq1Z/gXF+raOywALa61FKMUkksJJJJLuSXIvjJrkUAGRXf2P5nsa9syNLZng+zl5EVkAAAAAAAAAAAAAAAAAFAAAYFGWtlWWsDX7W1VlcM117z7+aXouZDXtB12ojfRtKGZXaOcm4vgnTLhOOMcsZXlKROUkazaWxqbk1ZXF57eTAhfpn7UNNqNnTo06s99fFQnGUcKuDa38y5SbWUsd+eHIt9mfT7SUaSvQ6iUqp1uzFklmqW/ZKfNfD8WOPA3fSH2MUSk7NNKUM8fd8N30z/AGOJ2h7PLaXhp/LAE4aTXQsip1zjOL5Si00/VGVG0+ddNpdVpJb1FtlTzl7r6rfjF8JeqOr2R7TdRXiOroVse2yvEbPWL4P5oCY1YXqZyuw+l+k1XCq+O/8AupdSz+V8/Q6CNoGYpFyZixsI59svSmenohpqZbs7k3JrnuLh/wB80BJum19c24121zlH4oxlGUl5pPgZ9duT5bh0J2vRVHaMKLYOK96pRnH6RCOM77gnvrh4Z70TJ7Lem3/kdO42tLV0bquwsKcX8NiXJZw00uTXYmgJFyN4xFM9Iwk+Ki2vQqPbeKOaPN1S7cLzaLcLtsh6ZkQejsPOUxmHfOXkkl95T3qXKEV4vMn/AGCqxi3yXD7T4R+Z7UTipJLi3nMuzlyRh23Z5tv8PkNNP/Ej5/kBtwUTKgVBQqAAAAAAAAAAAAoVAFAABRlpeUAsaLXE9MFMAeLieF+ljJYlFSXc0mjMaLXEDkNq9DabMuHUfdzj+qOE270EnDL3Mx+1Hiv7E0OJ5yrA+ZtodHJR7OXIyNmdJ9fpGlG12Vr/AC7czWPCXxL548Ceto9H6Lc71aT+1Hg/0Zxu2ugD4uvE13cpfIDV7F9p2nniOphLTz+18dWf4ksr1SNF00tq1G2dnSU4WUWW0JSi1KEv8WGVlcOPBeph7V6Kyi2t1prsa4nKbS0FlDjfBOM6pxsi8cnFp5+aXyA+nVbx/Mhy6iOy+k9fu+rRrcdRLqpXycHHyV0VLwWESJ0X6RVa7TQ1FTXFJWQ+tXbjrQf5d6wyMvabtGNu3NHVW05US00JtPlZK/e3X5Jx+YE3xsK7/wD3sMNXMr75gZamu5FfePuMP3z8Syy7CzJ4Xe3hAZrsZZKxd5zmu6VaKp4s1lCkvqqcZT/ljlnO7Q9pmmXDT123S7G17uv5y63/ABAkGV/cZWzam2rHy+r4+PkQxb0o1eplhyVdf7uvKWP90ub/AA8Dr+jGqvTjGEpZbXDsfmgJOTL0zxrzjjz7fM9UBcAgBUAAAAAAAAAAAAAKFQBQFSgApgqALcDBcALMFriemBgDxcTC1OzIT5uzyU5JfI2WCm6Bon0eo7a97Pe5M57bfQKu1P3bxlPqy4r5neuJa4AfMe3ugu0tBZKzS++Vcu2qcoyS7nuvrI46ezbstzhJSbbe8nvZ7cn2VOhPg1ldxpdpdEtNdxdai+9JY+QHzds7bu0aI7tes1CiuUXLeivJTzhGa+l+1X/rrfSNK/CJMmo9m1bfVlH1TX6mMvZjH7cP+X6AQ7dtraFnCet1T8rJx/pwYk9FbZ+0lZZ/HKU/6mydafZpWudi9I5/M2On6AaePNyfkor9QIH0mwJP6v3HQbN6LybXVZNmm6LaaH+Xnzb/ACwbXT6KEPghGPkkgI32H0Inwco7i75c/RczvNlbHroWILMu2T5v9EbNRKpAWqJekVwAAKgAAAAAAAAAAAAAAAAAAAAAAFCoAoAAAAADAAFMDAADAwAAwMAAVwMAAAABUAAAAAAAAAAAAAAAH//Z"
          alt=""
        />

        <div className="w-full flex flex-col gap-4">

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {" "}
                {pickup.substring(0, pickup.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {pickup.substring(pickup.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center border-b-2 p-2">
            <i className="ri-square-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                {destination.substring(0, destination.lastIndexOf(","))}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {destination.substring(destination.lastIndexOf(",") + 1).trim()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center p-2">
          <i className="ri-cash-line text-lg"></i>          
          <div>
              <h3 className="text-lg font-medium">₹{fare[vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LookingForDriver