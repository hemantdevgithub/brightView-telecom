import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import SubHeading from '../components/Shared/SubHeading';
import TopBanner from '../components/Shared/TopBanner/TopBanner';

const Customers = () => {
  const { slug } = useParams();
  return (
    <div>
      <TopBanner
        heading={"About Us"}
        img={"https://www.sermo.com/wp-content/uploads/2023/01/best-medical-specialties-hero-min.jpg"}
      />
      <Container>
        <div className='p-10'>
          <SubHeading text={slug.replace("-", " ").toLowerCase()} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam reiciendis blanditiis veniam facere alias aliquam eius, neque deleniti. Saepe, architecto? Dolore minus quisquam eius accusantium commodi, quod tempora maxime eligendi rerum in odit odio nisi natus unde voluptates quo aperiam alias consequuntur nihil. Repellat non, voluptatibus molestiae doloremque dolor consectetur adipisci ex voluptatem soluta ullam. Ipsum eveniet soluta officiis ab non accusamus, provident vero quod a adipisci labore, voluptates quidem quae, impedit iusto quam neque obcaecati nostrum assumenda id fugit eligendi voluptatibus esse! Eligendi, et corporis. Quia, perspiciatis. Necessitatibus reiciendis maxime expedita, vero omnis adipisci ipsa debitis eum ipsam id recusandae. Eius porro culpa, nihil atque totam labore nulla nemo aliquam! Unde aperiam dolorum nobis expedita quae esse aliquam provident non facere ad neque necessitatibus dignissimos ipsum culpa a exercitationem rerum incidunt veniam architecto commodi molestiae suscipit porro, earum et? Odit similique ducimus tempore expedita iste aut. Facilis minus culpa placeat, magni minima obcaecati error, provident sit vitae consectetur autem impedit necessitatibus eum qui nemo commodi repellendus fugit tempora consequuntur numquam ipsum dignissimos dolorum doloremque. Consectetur nostrum ullam, iure suscipit quae corrupti rem itaque ipsa? Corrupti officiis ad quos adipisci esse, excepturi vel suscipit necessitatibus fuga voluptatum distinctio in voluptas eveniet. Maxime saepe aspernatur corporis, ullam alias cum recusandae distinctio accusamus cupiditate quos aliquam deleniti tempore vel, natus corrupti commodi! Laboriosam nulla consequuntur sequi officiis magni! Consectetur, quam officiis? Ducimus sed quod voluptatibus ex ipsam natus facilis accusamus corrupti odit ipsa illum eaque error accusantium incidunt debitis iste itaque porro, expedita distinctio placeat quas fuga. Exercitationem dolorum, expedita, laborum delectus dolorem possimus nulla maxime blanditiis obcaecati quibusdam quod cupiditate repudiandae corporis quia facilis qui repellat sint dignissimos, explicabo aliquid ut hic. Sint, eum saepe. Vitae eaque nostrum laborum porro quisquam quam molestias qui veritatis omnis ex nulla laudantium quis animi molestiae perferendis inventore beatae, quod iusto cupiditate dignissimos reiciendis itaque? Itaque ad odit magnam facilis ex odio aliquam eaque deleniti atque molestiae maxime soluta, dolor voluptate exercitationem nisi sunt repellendus. Iure necessitatibus quibusdam nihil atque deserunt sunt, libero eum facilis sint saepe voluptatum ullam ratione, quasi voluptatem cupiditate magni accusantium quis nulla? Ullam dolorum ratione in id praesentium illum, voluptas, ipsam alias nihil perferendis officiis eveniet beatae qui, tempore nulla? A temporibus cumque in pariatur quis facere, natus, explicabo accusantium dolorum similique autem doloribus officia maxime! Ex nobis modi repellendus repellat, enim incidunt error laboriosam minima iste ipsa eaque, doloremque dolorum dignissimos architecto beatae cumque atque explicabo perspiciatis. Architecto dolorem, quaerat nihil magnam tempora eligendi, delectus perferendis repudiandae culpa a officiis ea expedita. Vero aliquid voluptatem, quasi neque excepturi ipsum nostrum porro exercitationem ipsam mollitia distinctio suscipit quis accusantium aperiam facilis repellendus, cum architecto nobis aut eveniet accusamus maxime. Alias laborum culpa eum? Ea eos quibusdam alias cumque quasi sint laudantium itaque, nostrum, cum et iste ut unde molestias. Harum, ipsa quam rem a nesciunt esse doloribus placeat corporis, fuga tempora quis deleniti? Placeat cupiditate, quibusdam, et quidem necessitatibus hic eum facilis ab molestiae nostrum id fugiat quia delectus distinctio.</p>
        </div>
      </Container>
    </div>
  );
};

export default Customers;