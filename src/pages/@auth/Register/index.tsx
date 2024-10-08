import { Container, ContainerForm, Content, HeaderForm } from './styled';
import { useNavigate } from 'react-router-dom';
import { CaretLeft } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '../../../controllers/signup';

const registerAccountFormSchema = z.object({
  phone: z.string(),
  name: z.string(),
  email: z.string().min(1, 'O campo email não pode ser nulo ou vazio.').email('Formato de e-mail inválido').toLowerCase(),
  email2: z.string(),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres.'),
  password2: z.string()
});

type RegisterAccountFormData = z.infer<typeof registerAccountFormSchema>;

export function Register () {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterAccountFormData>({
    resolver: zodResolver(registerAccountFormSchema)
  });

  const navigate = useNavigate();

  const goBackToPreviousScreen = () => {
    navigate(-1);
  };

  const handleSubmitData = ({ email, email2, password, password2, name, phone }: RegisterAccountFormData) => {
    signup({ email, email2, password, password2, name, phone });
  };

  return (
    <Container>
      <Content>
        <HeaderForm>
          <button className="btn-top-left">
            <CaretLeft size={32} color="#777777" weight="light" onClick={goBackToPreviousScreen} />
            <span>Voltar</span>
          </button>
        </HeaderForm>

        <ContainerForm>
          <form onSubmit={handleSubmit(handleSubmitData)}>
            <div className="inputContainer">
              <label htmlFor="phone">Nº Whatsapp</label>
              <input
                type="text"
                {...register('phone')}
                id="phone"
                placeholder="(21) 91020-3040"
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="name">Nome da Loja/Cliente</label>
              <input
                type="text"
                {...register('name')}
                id="name"
                placeholder="GSCare"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                {...register('email')}
                id="email"
                placeholder="johndoe@gmail.com"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="email2">Confirme Email</label>
              <input
                type="text"
                {...register('email2')}
                id="email2"
                placeholder="johndoe@gmail.com"
              />
              {errors.email2 && <span>{errors.email2.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                {...register('password')}
                id="password"
                placeholder="********************"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div className="inputContainer">
              <label htmlFor="password2">Confirme Senha</label>
              <input
                type="password"
                {...register('password2')}
                id="password2"
                placeholder="********************"
              />
              {errors.password2 && <span>{errors.password2.message}</span>}
            </div>

            <button className="button">Cadastrar</button>
          </form>
        </ContainerForm>
      </Content>
    </Container>
  );
}
