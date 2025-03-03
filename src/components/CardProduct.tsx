import { Star, Truck } from "lucide-react";
import cardProduct from "../assets/image-card.png";
import { useState } from "react";

export function CardProduct() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState<number | null>(null);
  const maxStars = 5;
	return (
		<div className="w-full drop-shadow-2xl">
			<img
				className="rounded-tl-2xl rounded-tr-2xl"
				src={cardProduct}
				alt="Foto de um produto - tênis"
			/>
			<div className="flex flex-col gap-7 p-15 border-b-gray-200 border-l-gray-200 border-r-gray-200 rounded-bl-2xl rounded-br-2xl shadow-2xl">
				<h1 className="text-5xl font-bold">Nike air Max 90</h1>
				<p className="text-xl font-medium">
					Eleve seu estilo com o clássico reinventado. Conforto supremo encontra
					design inovador
				</p>
				<div className="flex items-center gap-1">
        {[...Array(maxStars)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <Star
              key={`star-${currentRating}`}
              className={`w-6 h-6 cursor-pointer transition-colors ${
                currentRating <= (hover || rating) ? "text-yellow-500" : "text-yellow-500"
              }`}
              fill={currentRating <= (hover || rating) ? "currentColor" : "none"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(currentRating)}
            />
          );
        })}
        <span className="text-xl text-gray-400">({rating}) (42 avaliações)</span>
      </div>
				<div className="flex items-center justify-between"> 
					<span className="text-4xl text-blue-400 font-bold">R$ 899,00</span>
          <button className="text-xl text-white py-3.5 px-4 bg-linear-to-r from-sky-500 to-indigo-500 rounded-4xl p-1 hover:brightness-125 cursor-pointer" type="button">Comprar agora</button>
				</div>
        <p className="flex gap-3.5 text-gray-400">
          <Truck className="text-gray-400" />
          Frete grátis para todo o Brasil
        </p>
			</div>
		</div>
	);
}
