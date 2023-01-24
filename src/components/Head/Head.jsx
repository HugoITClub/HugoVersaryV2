import { Helmet } from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet"
      />

      {/* Bootstrap */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <title>Hugo English Club</title>
    </Helmet>
  );
}
