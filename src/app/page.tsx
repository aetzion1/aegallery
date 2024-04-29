import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/bb55cee3-c291-492d-86c2-caa6b219b971-2bpb.png",
  "https://utfs.io/f/9089d77d-c3ac-4fbf-a97f-1177dcd18814-2784.gif",
  "https://utfs.io/f/83b9e674-8111-4159-ab73-4d8d4db53160-hbzaty.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex felx-wrap gap-4">{
       [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }
      </div>

      Hello (gallery in progress)
    </main>
  );
}
